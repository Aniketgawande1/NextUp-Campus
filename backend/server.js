// File: server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/events_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// User Model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Event Model
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);

// Auth Middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await User.findById(decoded.id);
    
    if (!user) {
      throw new Error();
    }
    
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate' });
  }
};

// Register User
app.post('/api/users/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const user = new User({
      username,
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    // Create JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login User
app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    // Create JWT token
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Events
app.get('/api/events', auth, async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'username email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create Event
app.post('/api/events', auth, async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    
    const event = new Event({
      title,
      description,
      date,
      location,
      createdBy: req.user._id
    });
    
    await event.save();
    
    res.status(201).json({
      message: 'Event created successfully',
      event
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get Single Event
app.get('/api/events/:id', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('createdBy', 'username email');
    
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Seed initial events
const seedEvents = async () => {
  try {
    const count = await Event.countDocuments();
    if (count === 0) {
      const dummyEvents = [
        {
          title: 'Tech Conference 2025',
          description: 'Annual technology conference with workshops and speakers',
          date: new Date('2025-06-15'),
          location: 'San Francisco, CA',
          createdBy: null
        },
        {
          title: 'Music Festival',
          description: 'Three-day music festival featuring local and international artists',
          date: new Date('2025-07-22'),
          location: 'Austin, TX',
          createdBy: null
        },
        {
          title: 'Charity Run',
          description: '5K run to raise funds for local children\'s hospital',
          date: new Date('2025-08-10'),
          location: 'Chicago, IL',
          createdBy: null
        }
      ];
      
      await Event.insertMany(dummyEvents);
      console.log('Dummy events seeded successfully');
    }
  } catch (error) {
    console.error('Error seeding events:', error);
  }
};

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  seedEvents();
});