import Axios from "axios";

export const apiClient = Axios.create({
  baseURL: "http://localhost:4000",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    Authorization: "XXXXXX",
  },
});
