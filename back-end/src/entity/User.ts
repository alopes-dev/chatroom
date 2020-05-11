import {Entity, Column, PrimaryColumn, OneToMany} from "typeorm";

import Message from "./Message";

@Entity()
class User {

    @PrimaryColumn("uuid",{generated:"uuid"})
    id: string;

    @Column({type:"varchar", length:50})
    email: string;

    @Column({type:"varchar", length:50})
    password: string;

    @OneToMany(()=>Message, message=>message.emitter)
    @OneToMany(()=>Message, message=>message.receptor)
    messages:Message

}

export  default User;