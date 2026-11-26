

const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Announcement title is required'],
      trim: true,
      maxlength: 150
    },
    message: {
      type: String,
      required: [true, 'Announcement message is required'],
      trim: true,
      maxlength: 5000
    },
    audience: {
      type: String,
      enum: ['all', 'students', 'faculty'],
      default: 'all'
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

announcementSchema.index({ audience: 1, createdAt: -1 });

module.exports = mongoose.model(
  'Announcement',
  announcementSchema
);
