import {Server} from "socket.io";
import User from "./models/User";
import Message from "./models/Message";



export const socketHandler=(io:Server)=>{


io.on(
"connection",
(socket)=>{


console.log(
"connected",
socket.id
);



/*
USER ONLINE
*/

socket.on(
"login",
async(username)=>{


await User.findOneAndUpdate(

{
username
},

{
online:true,
socketId:socket.id
}

);



io.emit(
"onlineUsers",
await User.find({
online:true
})
);


});





/*
SEND MESSAGE
*/


socket.on(
"sendMessage",
async(data)=>{


const {
sender,
receiver,
text
}=data;



const receiverUser=
await User.findOne({
username:receiver
});



const message=
await Message.create({

sender,

receiver,

text,

status:
receiverUser?.online
?
"delivered"
:
"sent"

});





if(receiverUser?.socketId){


io.to(
receiverUser.socketId
)
.emit(
"receiveMessage",
message
);


}




socket.emit(
"messageSent",
message
);



});






/*
TYPING
*/


socket.on(
"typing",
async(data)=>{


const user=
await User.findOne({
username:data.receiver
});



if(user?.socketId){

io.to(
user.socketId
)
.emit(
"userTyping",
{
username:data.sender
}
);

}


});





/*
MESSAGE READ
*/


socket.on(
"readMessage",
async(messageId)=>{


const msg=
await Message.findByIdAndUpdate(

messageId,

{
status:"read"
},

{
new:true
}

);



if(msg){


const user=
await User.findOne({
username:msg.sender
});


if(user?.socketId){

io.to(user.socketId)
.emit(
"messageRead",
msg
);


}


}


});






/*
DISCONNECT
*/


socket.on(
"disconnect",
async()=>{


const user=
await User.findOneAndUpdate(

{
socketId:socket.id
},

{
online:false,
socketId:null
},

{
new:true
}

);



if(user){

io.emit(
"userOffline",
user.username
);

}


});


});


};