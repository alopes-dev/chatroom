import {Entity, Column, PrimaryColumn, ManyToOne, CreateDateColumn} from "typeorm";

import User from "./User";

@Entity()
class Message {

    @PrimaryColumn("uuid",{generated:"uuid"})
    id: string;

    @Column({type:"text"})
    message: string;

    @ManyToOne(()=>User, user=>user.id)
    receptor: User;
    
    @ManyToOne(()=>User, user=>user.id)
    emitter: User;

    @CreateDateColumn({type:"time without time zone"})
    date:Date

}


export  default Message;
