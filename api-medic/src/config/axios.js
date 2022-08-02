import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:4000/`,
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const setHeaders = (token) => {
  Object.assign(axiosInstance.defaults, {
    headers: { authorization: `Bearer ${token}` },
  });
};
