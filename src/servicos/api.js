import Axios from 'axios';

if (`${process.env.NODE_ENV}` === "dev") {
  var api = Axios.create({
    baseURL: `${process.env.BASE_URL}`
  });
}else {
  var api = Axios.create({
    baseURL: ''
  });
}

export default api;