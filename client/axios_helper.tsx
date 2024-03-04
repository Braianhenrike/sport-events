import axios, { AxiosRequestConfig, Method } from 'axios';

export const setAuthHeader = (token: string): void => {
  window.localStorage.setItem('apiToken', token);
};

export const getUserInfo = async (userId: string): Promise<any> => {
  return request('GET', `/admin/user-profile/edit/${userId}`);
};

export const updateUser = async (userID: string, user: any): Promise<any> => {
  console.log("enviado: ", { userID, user });
  return request('PUT', `/admin/user-profile/${userID}`, { userID, user });
};

export const createProduto = async (product: any): Promise<any> => {
  console.log("Produto enviado: ", product);
  return request('POST', `/product/admin`, product);
};

export const updateProduto = async (productId: string, product: any): Promise<any> => {
  console.log("Produto enviado para atualização: ", product);
  return request('PUT', `/product/admin/${productId}`, product);
};

export const deleteProduct = async (productId: string): Promise<any> => {
  return request('DELETE', `/product/admin/${productId}`);
};

export const getAllProducts = async (): Promise<any> => {
  return request('GET', '/product/home');
};

export const createCategoria = async (categoria: any): Promise<any> => {
  console.log("Categoria enviada: ", categoria);
  return request('POST', '/api/categorias', categoria);
};

export const getAllCategorias = async (): Promise<any> => {
  return request('GET', '/api/categorias');
};

axios.defaults.baseURL = 'http://localhost:8080';

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
