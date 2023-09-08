import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

api.defaults.xsrfCookieName = "csrftoken";
api.defaults.xsrfHeaderName = "X-CSRFToken";
api.defaults.withCredentials = true;

export default api;
