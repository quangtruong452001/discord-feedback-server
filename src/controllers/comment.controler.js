import { SuccessResponse } from '../core/success.response';
import CommentService from '../services/comment.service';

class CommentController {
  async createComment(req, res, next) {
    new SuccessResponse({
      message: 'Comment created successfully',
      data: await CommentService.createComment(req.body),
    });
  }
}

export default new CommentController();
