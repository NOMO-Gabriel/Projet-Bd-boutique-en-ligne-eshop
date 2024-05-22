import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { getCategories } from '../../../services/api'; // Assurez-vous d'importer correctement la fonction
import useFetch from '../../../hooks/useFetch';

const See = () => {
  const { data: categories = [], loading, error } = useFetch(getCategories);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <h2>All Categories of Products</h2>
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <div key={index}>
            <h3>{category.nomCat}</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {category.products && category.products.length > 0 ? (
                  category.products.map((product, idx) => (
                    <tr key={idx}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No products found for this category.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        ))
      ) : (
        <div>No categories found.</div>
      )}
    </Container>
  );
};

export default See;
