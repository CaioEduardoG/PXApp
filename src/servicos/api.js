import Axios from 'axios';

var api 

if (`${process.env.NODE_ENV}` === "dev") {
  api = Axios.create({
    baseURL: `${process.env.BASE_URL}`
  });
}else {
  api = Axios.create({
    baseURL: ''
  });
}

export default api;