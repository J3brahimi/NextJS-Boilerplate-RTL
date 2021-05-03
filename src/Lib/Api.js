import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.BASE_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});

export default api;
