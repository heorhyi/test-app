import axios from 'axios';

const token = localStorage.getItem('token');

const prefix = 'api';

const baseURL = `http://smktesting.herokuapp.com/${prefix}`;

const instance = axios.create({
  baseURL,
  headers: token ? {'Authorization': `Token ${token}`} : {},
});

export const registerUser = ({ body }) => instance.post('/register/', body);
export const login = ({ body }) => instance.post('/login/', body);
export const fetchProducts = () => instance.get('/products/');
export const fetchProductReviews = (id) => instance.get(`/reviews/${id}`);
export const createProductReview = ({ data }) => instance.post(`/reviews/${data.id}`, data.body);
