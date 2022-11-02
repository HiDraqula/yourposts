// import axios from "axios";
// import { setLoader } from "./app/app.actions";
import env from "./env";

// const Api = axios.create({
//   // baseURL: 'https://jsonplaceholder.typicode.com',
//   baseURL: env.apiUrl,
//   // timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });
const Api = function () {
  this.baseUrl = env.apiUrl;
  this.call = (path, data) =>
    fetch(path, data)
      .then((res) => ({
        data: res.json(),
      }))
      .catch((err) => console.error(err));
  this.headers = { "Content-type": "application/json; charset=UTF-8" };

  this.get = (path) => this.call(this.baseUrl + path);
  this.post = (path, body) =>
    this.call(this.baseUrl + path, {
      method: "POST",
      body: JSON.stringify(body),
      headers: this.headers,
    });
  this.put = (path, body) =>
    this.call(this.baseUrl + path, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: this.headers,
    });
  this.delete = (path) => this.call(this.baseUrl + path);
};
export default new Api();
// // Add a request interceptor
// Api.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     // setLoader(true);
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     console.error({ error });
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// Api.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     // dispatch(appActions.setLoader());
//     // setLoader(false);
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     console.error({ error });
//     return Promise.reject(error);
//   }
// );

// export default Api;
