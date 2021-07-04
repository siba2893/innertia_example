import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRF-Token"

axios.interceptors.request.use(
  function(config) {
    const token = document.querySelector('meta[name="csrf-token"]').content
    if (token) {
      config.headers[config.method] = {
        'X-CSRF-Token': token,
      };
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);