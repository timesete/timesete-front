import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: process.env.WEB_TOKEN_CLIENT
  },
});
