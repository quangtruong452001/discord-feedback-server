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

  static async getAllComments({ limit = 10, page = 1 }) {
    const skip = (page - 1) * limit;
    return await Comment.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
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
}

export default CommentService;
