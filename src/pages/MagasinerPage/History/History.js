import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const History = () => {
  const transactions = [
    { id: 1, action: 'Create', product: 'Product 1', quantity: 10, price: 100 },
    { id: 2, action: 'Update', product: 'Product 2', quantity: 5, price: 50 },
    { id: 3, action: 'Delete', product: 'Product 3', quantity: 2, price: 20 },
  ];

  return (
    <Container>
      <h1 className="mb-4">Transaction History</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Action</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.action}</td>
              <td>{transaction.product}</td>
              <td>{transaction.quantity}</td>
              <td>${transaction.price}</td>
              <td>
                {transaction.action === 'Create' && <FaPlus />}
                {transaction.action === 'Update' && <FaEdit />}
                {transaction.action === 'Delete' && <FaTrash />}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default History;
