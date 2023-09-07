import axios from "axios";
import { env } from "../helper/env.helper";

const api = axios.create({
  baseURL: env.API_URL,
});

api.defaults.xsrfCookieName = "csrftoken";
api.defaults.xsrfHeaderName = "X-CSRFToken";
api.defaults.withCredentials = true;

export default api;
