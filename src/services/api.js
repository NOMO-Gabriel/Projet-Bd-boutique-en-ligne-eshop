import axios from 'axios';

const API_BASE_URL = 'http://localhost:8001/api';

export const getProducts = () => axios.get(`${API_BASE_URL}/produit`);
export const getCategory = () => axios.get(`${API_BASE_URL}/categorie`);
