import express from 'express';

import UserController from '../controllers/User'

const router = express.Router();

router.get('/users/:id',UserController.index);

router.get('/users',UserController.users);

router.post('/users',UserController.store);

export default router;