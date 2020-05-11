import "reflect-metadata";
import express from 'express'
import cors from 'cors'

import http from 'http';

import socket from "socket.io";


import Connection from './database';

/** Routes */
import routes from './routers'

Connection.connected()

const app = express();
app.use(cors())
app.use(express.json())

app.use(routes)

const httpServer = new http.Server(app)

const io = socket(httpServer)

io.on('connection',(socket)=>{
    console.log('a user connected ' + socket.id);
})

httpServer.listen(5252, () => {
    return console.log(`server is listening on ${5252}`);
});



