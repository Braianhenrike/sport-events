import axios, { AxiosRequestConfig, Method } from 'axios';

export const setAuthHeader = (token: string): void => {
  window.localStorage.setItem('apiToken', token);
};

export const getUserInfo = async (userId: string): Promise<any> => {
  return request('GET', `/user-profile/${userId}`);
};

export const updateUser = async (userId: string, user: any): Promise<any> => {
  console.log("enviado: ", { userId, user });
  return request('PUT', `/user-profile/${userId}`, user);
};

export const createUser = async (userData: any): Promise<any> => {
  return request('POST', '/user-profile/register', userData);
};

axios.defaults.baseURL = 'http://localhost:5173';

export const request = async (method: Method, url: string, data?: any): Promise<any> => {
  const config: AxiosRequestConfig = {
    method: method,
    url: url,
    data: data,
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return axios(config);
};
