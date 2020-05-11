import express from 'express';

import ChatController from '../controllers/Chat'

const router = express.Router();

router.get('/chat/:emitter/:receptor',ChatController.index);

export default router;