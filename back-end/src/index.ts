import "reflect-metadata";
import express from 'express'
import http from 'http';

import socket from "socket.io";

import Connection from './database';

Connection.connected()

const app = express();


const httpServer = http.createServer(app)

const io = socket(http)

io.on('connection',()=>{
    console.log('a user connected');
})

httpServer.listen(5252, () => {
    return console.log(`server is listening on ${5252}`);
});



