// @flow

import axios from 'axios';
import { apiPath } from '../configs/configs'
// Add a response interceptor
// Make sure to comment out in production
axios.interceptors.response.use(function (response) {
    return response;
   }, function (error) {
    return Promise.reject(error);
   });

// Helper function for get request   
const get = (path: string): Promise<*> =>
 axios
   .get(`${apiPath}/${path}`)
   .then((response: Object): Object => response)
   .catch((error: Object): Promise<Object> => {
     return Promise.reject({error: error});
   });
// Helper function for post request   
const post = (path: string, data: Object): Promise<*> =>
 axios
   .post(`${apiPath}/${path}`, data)
  //  .then((response: Object): Object => response)
   .catch((error: Object): Object => {
     return Promise.reject({error: error});
   });

// Get Hello from server
export const getHello = (): Promise<Object> =>
   get('5aaf959c2d000048006efe36')
     .then((response: Object): Object => response)
    //  .error((error: Object): Promise<Object> => {
    //   return Promise.reject({error: error});
    // });