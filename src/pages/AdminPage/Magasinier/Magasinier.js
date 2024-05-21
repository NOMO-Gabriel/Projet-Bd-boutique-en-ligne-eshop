import React, { useState } from 'react';
import { Form, Row, Col, Button, InputGroup, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';

const MagasinierPage = () => {
  const [selectedMagasinier, setSelectedMagasinier] = useState('John Doe');
  const [totalSales, setTotalSales] = useState(1234); // Valeur par défaut
  const [totalProducts, setTotalProducts] = useState(5678); // Valeur par défaut
  const [showProductsAdded, setShowProductsAdded] = useState(false);
  const [showProductsRemoved, setShowProductsRemoved] = useState(false);

  const toggleProductsAdded = () => {
    setShowProductsAdded(!showProductsAdded);
  };

  const toggleProductsRemoved = () => {
    setShowProductsRemoved(!showProductsRemoved);
  };

  const magassiniers = ['John Doe', 'Jane Smith', 'Mike Johnson'];

  return (
    <Container>
      <Row className="mb-4">
        <Col md="6">
          <div className="p-3 bg-light border">
            <h4>Total Sales: {totalSales}</h4>
          </div>
        </Col>
        <Col md="6">
          <div className="p-3 bg-light border">
            <h4>Total Products: {totalProducts}</h4>
          </div>
        </Col>
      </Row>
      <Form>
        <Form.Group as={Row} controlId="formMagasinier" className="mb-3">
          <Form.Label column sm={3}>
            Magasinier
          </Form.Label>
          <Col sm={9}>
            <DropdownButton
              id="dropdown-basic-button"
              title={selectedMagasinier}
              onSelect={(e) => setSelectedMagasinier(e)}
              size="lg"
            >
              {magassiniers.map((magasinier, index) => (
                <Dropdown.Item key={index} eventKey={magasinier}>
                  {magasinier}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Products Added</td>
            <td>50</td>
            <td>
              <Button variant="secondary" onClick={toggleProductsAdded}>
                {showProductsAdded ? 'Hide' : 'More'}
              </Button>
            </td>
          </tr>
          {showProductsAdded && (
            <tr>
              <td colSpan="3">
                <ul>
                  <li>Product 1: Details...</li>
                  <li>Product 2: Details...</li>
                  {/* Add more product details here */}
                </ul>
              </td>
            </tr>
          )}
          <tr>
            <td>Number of Products Removed</td>
            <td>20</td>
            <td>
              <Button variant="secondary" onClick={toggleProductsRemoved}>
                {showProductsRemoved ? 'Hide' : 'More'}
              </Button>
            </td>
          </tr>
          {showProductsRemoved && (
            <tr>
              <td colSpan="3">
                <ul>
                  <li>Product A: Details...</li>
                  <li>Product B: Details...</li>
                  {/* Add more product details here */}
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default MagasinierPage;
