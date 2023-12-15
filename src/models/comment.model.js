const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Comment';
const COLLECTION_NAME = 'Comments';

const commentSchema = new Schema(
  {
    comment: String,
    discord_userID: String,
    discord_username: String,
    discord_channelID: String,
    status: {
      type: String,
      enum: ['new', 'resolved'],
      default: 'new',
    },
    status_event: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

const Comment = model(DOCUMENT_NAME, commentSchema);

module.exports = Comment;
