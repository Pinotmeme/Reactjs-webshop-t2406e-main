import React from 'react';
import { Container, Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap';
import './CartDetail.css'; // Import your CSS file for styling

const CartDetail = () => {
  // Dummy data
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 45.99,
      quantity: 2,
      image: 'images/hero_1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100'
    }
  ];

  const shippingFee = 5.99;
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + shippingFee;

  return (
    <Container className="my-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Cart
          </li>
        </ol>
      </nav>

      <h2 className="mb-4">Cart</h2>
      <h1 className="mb-4">Shopping Cart</h1>
      
      <Row className="g-4">
        {/* Product List Column */}
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <ListGroup variant="flush">
                {cartItems.map(item => (
                  <ListGroup.Item key={item.id} className="py-3">
                    <Row className="align-items-center">
                      <Col xs={3} md={2}>
                        <Image src={item.image} fluid rounded />
                      </Col>
                      
                      <Col xs={9} md={10}>
                        <Row className="align-items-center">
                          <Col md={5}>
                            <h5 className="mb-1">{item.name}</h5>
                            <p className="mb-0">${item.price.toFixed(2)}</p>
                          </Col>
                          
                          <Col md={3} className="mt-2 mt-md-0">
                            <div className="d-flex align-items-center">
                              <Button variant="outline-secondary" size="sm">
                                -
                              </Button>
                              <span className="mx-2">{item.quantity}</span>
                              <Button variant="outline-secondary" size="sm">
                                +
                              </Button>
                            </div>
                          </Col>
                          
                          <Col md={3} className="mt-2 mt-md-0">
                            <h5 className="mb-0 text-end">
                              ${(item.price * item.quantity).toFixed(2)}
                            </h5>
                          </Col>
                          
                          <Col md={1} className="mt-2 mt-md-0 text-end">
                            <Button variant="link" className="text-danger">
                              <i className="bi bi-trash"></i>
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Summary Column */}
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-4">Cart T</h4>
              <h4 className="mb-4">Order Summary</h4>
              
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                  <span>Shipping</span>
                  <span>${shippingFee.toFixed(2)}</span>
                </ListGroup.Item>
                
                <ListGroup.Item className="d-flex justify-content-between align-items-center px-0 fw-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </ListGroup.Item>
              </ListGroup>

              <Button 
                variant="primary" 
                size="lg" 
                className="w-100 mt-4"
              >
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDetail;