import { BadRequestError } from '../core/error.response.js';
import Comment from '../models/comment.model.js';
class CommentService {
  static async createComment({
    comment,
    discord_userID,
    discord_username,
    discord_channelID,
  }) {
    const newComment = new Comment({
      comment,
      discord_userID,
      discord_username,
      discord_channelID,
    });
    return newComment.save();
  }

  static async getAllComments() {
    return await Comment.find()
      .sort({ createdAt: -1 })
      .select([
        'comment',
        'discord_userID',
        'discord_username',
        'discord_channelID',
        'status',
        'status_event',
      ])
      .lean();
  }

  static async updateComment({ id }) {
    const comment = await Comment.findById(id);

    if (!comment) {
      throw new BadRequestError('Comment not found');
    }

    if (comment.status === 'resolved') {
      throw new BadRequestError('Comment already resolved');
    }

    comment.status = 'resolved';
    comment.status_event = new Date();
    return comment.save();
  }
}

export default CommentService;
