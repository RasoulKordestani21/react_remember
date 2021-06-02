import  axios  from 'axios';
console.log(axios)
const httpData = {
    baseURL: "https://60b77f8f17d1dc0017b8a2c4.mockapi.io/",
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }

}
export {httpData}