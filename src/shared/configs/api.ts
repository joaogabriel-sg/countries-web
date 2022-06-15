import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});
