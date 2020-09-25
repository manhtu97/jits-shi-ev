import axios from "axios";
import config from "./config";

export default (http) => {
  const apiClient = axios.create({
    baseURL: config.backendEndpoint,
    headers: http || {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    timeout: config.timeoutDefault,
  });
  apiClient.interceptors.request.use(
    (config) => {
      return {
        ...config,
        headers: apiClient.headers,
      };
    },
    (error) => Promise.reject(error)
  );

  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log(error)
      }
    }
  );
  return apiClient;
};
