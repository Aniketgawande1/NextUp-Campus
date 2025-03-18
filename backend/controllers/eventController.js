const Event = require('../models/eventModel');

// @desc    Get all events
// @route   GET /api/events
const getEvents = async (req, res) => {
  const events = await Event.find();
  res.status(200).json(events);
};

// @desc    Create new event
// @route   POST /api/events
const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;

  if (!title || !date) {
    res.status(400);
    throw new Error('Please provide title and date');
  }

  const event = await Event.create({
    title,
    description,
    date,
    location,
  });

  res.status(201).json(event);
};

module.exports = { getEvents, createEvent };
