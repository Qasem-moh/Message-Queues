"use strict";

require('dotenv').config();
const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:8080';
const socket=io.connect(`${HOST}/caps`);

socket.emit('get_all');

socket.on('driverPickup', msg=>{
    setTimeout(()=>{
        console.log('DRIVER: picked up this msg :',msg.id);
        socket.emit('received',msg);
    },5000);
});


socket.on('driverTransit',msg=>{
    setTimeout(()=>{
        console.log(`DRIVER: delivered  up ${msg.id}`);
        socket.emit('deleverd',msg);
        
    },3000)
});