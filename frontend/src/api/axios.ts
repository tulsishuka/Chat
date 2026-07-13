import axios from "axios";


const API = axios.create({

baseURL: "https://chat-1-l165.onrender.com/api"

});


export default API;