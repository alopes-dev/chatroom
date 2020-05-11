import { getRepository, Not } from 'typeorm'
import {Request, Response} from 'express'

import User from '../entity/User'

class UserController{

    async index(req:Request, res:Response){
        const user = await getRepository(User).find({where:{id:Not(req.params.id)}})

        return res.json(user)
    } 

    async users(_:Request, res:Response){
        const users = await getRepository(User).find()

        return res.json(users)
    }

    async store(req:Request, res:Response){
        const {email, password} = req.body
        const UserRepo = getRepository(User)

        const userExist = await UserRepo.findOne({where:{email:email}})

        if(userExist)
            if(userExist.password === password)
                return res.json(userExist)

       const user =  UserRepo.create(req.body)

        UserRepo.save(user)

        return res.json(user)
    }
} 

export default new UserController()