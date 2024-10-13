import axios from "axios";

export const API_URL = "https://api.irdo.pw";

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});