const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/events', eventRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`🚀 Server running on port ${PORT}`));
