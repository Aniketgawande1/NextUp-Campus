const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
