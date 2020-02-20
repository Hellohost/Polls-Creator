import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-polls-49dc7.firebaseio.com/'
})