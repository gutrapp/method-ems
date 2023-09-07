import axios from "axios";
import { env } from "../env/env";

const api = axios.create({
  baseURL: env.BASE_API_URL,
});

api.defaults.xsrfCookieName = "csrftoken";
api.defaults.xsrfHeaderName = "X-CSRFToken";
api.defaults.withCredentials = true;

export default api;
