import axios from 'axios';

export const HTTP = axios.create({
    baseURL: 'http://localhost:90/todo-app/api/'
  })