import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const getProducts = () => axios.get(`${API_BASE_URL}/produit`);
export const getCategories = () => axios.get(`${API_BASE_URL}/categorie`);
export const getProductsPerCategory = () => axios.get(`${API_BASE_URL}/categorie/produit?idCategorie=1`);