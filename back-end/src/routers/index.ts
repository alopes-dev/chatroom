import express from 'express';

import ChatRoute from './Chat.routes'
import UserRoute from './user.routes'
import MessageRoute from './message.routes'

const routers = express.Router();

routers.use(ChatRoute);
routers.use(UserRoute);
routers.use(MessageRoute);

export default routers