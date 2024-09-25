import axios from "axios";

const axiosConfig = axios.create({
    // withCredentials: true,
     baseURL: "http://pscchcit-001-site1.atempurl.com/api",
    // baseURL: "http://localhost:5016/api",
    auth: {
        Username: "11192089",
        Password: "60-dayfreetrial"
    },
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Basic ' + btoa('11172696:60-dayfreetrial'),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', 
        'Access-Control-Allow-Headers': 'Content-Type, Authorization' 
    },

});

export default axiosConfig;
