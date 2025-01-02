import { INotice, User } from '@/feature/user/userSlice';
import { Product } from '@/util/types';
import axios from 'axios';

const URL = 'http://localhost:3310';

export const LoginApi = async (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}) => {
  return await axios.post(`${URL}/api/login`, { data });
};

export const RegisterApi = async (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}) => {
  return await axios.post(`${URL}/api/register`, { data });
};

export const getListProdApi = async (data: Product[]) => {
  return await axios.post(`${URL}/api/product`, { data });
};

export const editProd = async (prod: Product) => {
  return await axios.put(`${URL}/api/product`, { prod });
};

export const deleteProd = async (prod: Product) => {
  return await axios.delete(`${URL}/api/product`, { data: prod });
};

export const getProdId = async (prod: Product) => {
  return await axios.get(`https://dummyjson.com/products`, { data: prod });
};

export const updateCart = async (currentUsers: User) => {
  return await axios.put(`https://dummyjson.com/carts/1`, { data: currentUsers });
};

export const getCart = async (currentUsers: User) => {
  return await axios.get(`https://dummyjson.com/carts`, { data: currentUsers });
};

export const addOrder = async (order: INotice) => {
  return await axios.post(`${URL}/api/order`, { data: order });
};

export const getOrderId = async (order: INotice) => {
  return await axios.get(`${URL}/api/order/${order.id}`, { data: order });
};

export const deleteOrderId = async (order: INotice) => {
  return await axios.delete(`https://dummyjson.com/products/1`, { data: order });
};

export const getNoticeApi = async (user: User) => {
  return await axios.get('https://dummyjson.com/todos', { data: user });
};

export const addComment = async (comment: { productId: string; rating: number; message: string; nameUser: string }) => {
  return await axios.post(`${URL}/api/rating`, { data: comment });
};
