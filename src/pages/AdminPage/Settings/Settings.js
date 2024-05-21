import React, { useState } from 'react';
import { Form, Row, Col, Button, InputGroup, Container } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SettingsPage = () => {
  const [form, setForm] = useState({
    name: 'Admin eshop',       // Nom par défaut
    userName: 'admin',         // Nom d'utilisateur par défaut
    password: 'defaultpassword', // Mot de passe par défaut
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire
    console.log('Form submitted', form);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="mb-4">Settings</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formName" className="mb-3">
              <Form.Label column sm={3}>
                Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  size="lg"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formUserName" className="mb-3">
              <Form.Label column sm={3}>
                User Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="userName"
                  value={form.userName}
                  onChange={handleChange}
                  placeholder="Enter your user name"
                  size="lg"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPassword" className="mb-3">
              <Form.Label column sm={3}>
                Password
              </Form.Label>
              <Col sm={9}>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    size="lg"
                  />
                  <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Settings
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsPage;
