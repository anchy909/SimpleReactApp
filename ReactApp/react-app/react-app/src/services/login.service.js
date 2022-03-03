import axios from 'axios';
import { API_URL_LOGIN } from 'helpers';

const login = (data) => {
    return axios.post(API_URL_LOGIN, data);
};



export const loginService = {
    login
}