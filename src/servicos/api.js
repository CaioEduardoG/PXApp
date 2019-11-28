import Axios from 'axios';

const api = Axios.create({
    baseURL: `${process.env.BASE_URL}`
}); 

export default api;