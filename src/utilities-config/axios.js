
import axios from "axios";
import { baseURL } from "./urlConfig"
import {store} from '../redux/store' 
import { authConstants } from "../redux/constants";
const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
    baseURL,
    // headers: {
    //     'Authorization': token ? `Bearer ${token}` : ""
    // } use this headers instead
    headers: {
        Autorization: token ? `Bearer ${token}` : ""
    }
});


// axiosInstance.interceptors.request.use(request => {
//     const {SignIn} = store.getState();
//     if(SignIn.token) {
//         request.headers.Authorization = `Bearer ${SignIn.token}`;
//     }
//     return request; 
// });
// axiosInstance.interceptors.response.use(response=>{
//     return response;
// }, 
// (error) => {
//     if(error.response.status === 500 ){
//         localStorage.clear();
//         store.dispatch({type: authConstants.USER_SIGNOUT_SUCCESS})
//     }
//     return Promise.reject(error);
// }); 

export default axiosInstance; 