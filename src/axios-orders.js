import axios from 'axios'

const instance = axios.create({
    baseURL:'https://my-burger-app-e7fa7.firebaseio.com/'
})

export default instance