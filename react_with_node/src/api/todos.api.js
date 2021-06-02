
import  axios  from 'axios';
import { httpData } from '../utils/utils.http'
console.log(httpData)
const axiosReq = axios.get(`${httpData.baseURL}/todos`)
    .then((response) => {
        console.log(response.data)
    })
    .catch((err) => {
        console.log(err);
    })

export { axiosReq }