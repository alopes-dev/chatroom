import { getRepository, Not } from 'typeorm'
import {Request, Response} from 'express'

import Message from '../entity/Message'

class MessageController{

    async index(req:Request, res:Response){
        const messages = await getRepository(Message).find( {
                                    where:[
                                        { emitter:req.params.emitter, receptor:req.params.receptor },
                                        { emitter:req.params.receptor , receptor:req.params.emitter }
                                    ],
                                    
                                    relations:["emitter","receptor"] })

        return res.json(messages)
    }
} 

export default new MessageController()