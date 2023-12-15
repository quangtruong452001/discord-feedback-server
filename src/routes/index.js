import express from 'express';
import commentRouter from './comment/index.js';
const router = express.Router();

router.get('/checkstatus', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Welcome to the API',
  });
});

router.use('/comment', commentRouter);

export default router;
