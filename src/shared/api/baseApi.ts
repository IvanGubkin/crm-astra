import axios from "axios";


export const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL,
});