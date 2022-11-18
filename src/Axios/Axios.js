import axios from 'axios';

const Axios = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: 'http://54.89.226.132:3005/api/v1',
});

Axios.interceptors.request.use((request) => {
  document.querySelector('.loading-bg').style.display = 'flex';
  return request;
});

Axios.interceptors.response.use(
  (response) => {
    document.querySelector('.loading-bg').style.display = 'none';
    return response;
  },
  (error) => {
    document.querySelector('.loading-bg').style.display = 'none';
    throw error;
  }
);

export default Axios;
