import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://christiano-santos.com.br/loterias/api'
});
