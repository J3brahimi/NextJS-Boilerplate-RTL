import axios from "Lib/Api";
import { toast } from "Utils/toast";

export const contactUs = body => {
  return axios.post(`contactus`, body).then(res => res.data);
};

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.config?.inPlaceHandle) return Promise.reject(error);

    console.log({ ...error });
    showError(error);

    return Promise.reject(error); // not resolved promise
  },
);

export const showError = ({ response }) => {
  toast("message", "error");

  const messages = [];

  if (!response) messages.push("Network error");
  else if (response.status === 422) {
    let text = Object.values(response.data.errors);
    messages.push(...text);
  } else if (response.status === 404) {
    messages.push("404 Not Found");
  }

  messages.map(message => toast(message, "error"));
};
