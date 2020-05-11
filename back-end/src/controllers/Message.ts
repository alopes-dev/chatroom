import { getRepository, Not } from 'typeorm'
import {Request, Response} from 'express'

import Message from '../entity/Message'
import User from '../entity/User'

class MessageController{

    async index(req:Request, res:Response){
        const users = await getRepository(User).find({where:{id:Not(req.params.id)}})

        return res.json(users)
    }

    async store(req:Request, res:Response){
        
        const MessageRepo = getRepository(Message)

        const message =  MessageRepo.create(req.body)

        MessageRepo.save(message)

        return res.json(message)
    }
} 

export default new MessageController()