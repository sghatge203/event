import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"http://localhost:4001/api/"
});

axiosInstance.interceptors.request.use(
    function(config){
        const token = localStorage.getItem('county_token');
        if(token){
            config.headers["x-access-token"] = token;
        }
        config.headers["Content-Type"] = 'application/json';
        return config;
    },

    function (error){
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response){
        return response;
    },
    function(error){
        return Promise.reject(error);
    }
)

export default axiosInstance;