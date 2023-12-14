import express from 'express';

const router = express.Router();

router.get('/checkstatus', (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'Welcome to the API',
  });
});

export default router;