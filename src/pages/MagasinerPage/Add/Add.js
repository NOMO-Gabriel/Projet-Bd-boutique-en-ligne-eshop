import React, { useState } from 'react';
import { Form, Row, Col, Button, InputGroup, Container } from 'react-bootstrap';

const Add = ({ title }) => {
  const [categoryName, setCategoryName] = useState('');
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour soumettre les données du formulaire
    console.log('Nom de la catégorie :', categoryName);
    console.log('Images :', images);
    console.log('Description :', description);
    console.log('ID de catégorie :', categoryId);
    console.log('Quantité :', quantity);
  };

  return (
    <Container >
      <h2>{title}</h2>
      <Form onSubmit={handleCategorySubmit}>
        <Form.Group as={Row} controlId="formCategoryName" className="mb-3">
          <Form.Label column sm={3}>
            Category Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formImages" className="mb-3">
          <Form.Label column sm={3}>
            Images
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formDescription" className="mb-3">
          <Form.Label column sm={3}>
            Description
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter category description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formCategoryId" className="mb-3">
          <Form.Label column sm={3}>
            Category ID
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Enter category ID"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formQuantity" className="mb-3">
          <Form.Label column sm={3}>
            Quantity
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Add;
