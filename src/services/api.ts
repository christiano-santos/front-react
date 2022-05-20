import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://129.213.99.156:80/api'
});