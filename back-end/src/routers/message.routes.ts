import express from 'express';

import MessageController from '../controllers/Message'

const router = express.Router();

router.get('/messages/:emitter/:receptor',MessageController.index);

router.post('/messages',MessageController.store);

export default router;