import { Router } from 'express';
import { asyncHandler } from '../../utils/index.js';
import commentControler from '../../controllers/comment.controler.js';
const commentRouter = Router();

commentRouter.post('', asyncHandler(commentControler.createComment));
commentRouter.get('', asyncHandler(commentControler.getAllComments));
commentRouter.put('/:id', asyncHandler(commentControler.updateComment));

export default commentRouter;
