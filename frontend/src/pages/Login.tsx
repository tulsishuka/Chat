import {useState} from "react";
import API from "../api/axios";
import socket from "../socket/socket";
import {useNavigate} from "react-router-dom";


const Login=()=>{


const [username,setUsername]=useState("");

const navigate=useNavigate();



const login=async()=>{


const response =
await API.post(
"/auth/login",
{
username
}
);



localStorage.setItem(
"username",
response.data.user.username
);



socket.connect();



socket.emit(
"login",
username
);



navigate("/home");


};



return (

<div>

<h1>
Login
</h1>


<input

value={username}

onChange={
(e)=>setUsername(e.target.value)
}

placeholder="Enter username"

/>


<button onClick={login}>

Join Chat

</button>


</div>

);


}


export default Login;