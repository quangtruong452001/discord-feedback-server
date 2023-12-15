import CommentService from '../services/comments.service.js';
import SuccessResponse from '../core/success.response.js';

class CommentController {
  async createComment(req, res, next) {
    new SuccessResponse({
      message: 'Comment created successfully',
      metadata: await CommentService.createComment(req.body),
    }).send(res);
  }

  async getAllComments(req, res, next) {
    new SuccessResponse({
      message: 'Comments retrieved successfully',
      metadata: await CommentService.getAllComments(),
    }).send(res);
  }

  async updateComment(req, res, next) {
    new SuccessResponse({
      message: 'Comment updated successfully',
      metadata: await CommentService.updateComment(req.params),
    }).send(res);
  }
}

export default new CommentController();
