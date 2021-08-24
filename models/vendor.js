"use strict";

require('dotenv').config();
let faker =require('faker');
const io=require('socket.io-client');
const HOST=process.env.HOST || 'http://localhost:8080';
const socket=io.connect(`${HOST}/caps`);

setInterval(() => {
        let customerOrder={
            storeName:process.env.STORENAME || 'qasem',
            orderId:faker.datatype.uuid(),
            customerName:faker.name.findName(),
            address:faker.address.streetAddress()
        };
    
        socket.emit('pickup',customerOrder);
}, 1500);

socket.on('added', payload=> {
    console.log("Thank you for adding : ", payload);
});

socket.on('vendorDileverd',msg=>{
    console.log(`thank you for delivering ${msg.id}`);

})

