import Comment from '../models/comment.model';
class CommentService {
  static async createComment({
    comment,
    discord_userID,
    discord_username,
    discord_channelID,
  }) {
    const comment = new Comment({
      comment,
      discord_userID,
      discord_username,
      discord_channelID,
    });
    return await comment.save().select();
  }
}
