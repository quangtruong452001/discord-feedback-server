import { Schema, model } from 'mongoose';
const DOCUMENT_NAME = 'Comment';
const COLLECTION_NAME = 'Comments';

const commentSchema = new Schema(
  {
    comment: String,
    discord_userID: Number,
    discord_username: String,
    discord_channelID: Number,
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

export default Comment;