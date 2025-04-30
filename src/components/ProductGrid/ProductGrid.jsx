// components/ProductGrid/ProductGrid.jsx
import React, { useState } from "react";
import { Card, Button, Row, Col, Container, Badge } from "react-bootstrap";
import { FaStar, FaEye, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProductGrid.css";

export default function ProductGrid({ products = [] }) {
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const handleAddToCart = (productId, e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện nổi bọt
    setCartItems(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleQuickView = (productId, e) => {
    e.stopPropagation(); // Ngăn chặn sự kiện nổi bọt
    console.log("Xem nhanh sản phẩm:", productId);
  };

  const handleImageClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className="product-grid py-5">
      <Container>
        <h2 className="text-center mb-4">Sản phẩm mới</h2>
        <p className="text-center text-muted mb-5">
          Khám phá những sản phẩm mới nhất của chúng tôi
        </p>

        <Row>
          {products.map((product) => (
            <Col lg={3} md={6} className="mb-4" key={product.id}>
              <Card className="h-100 product-card">
                <div 
                  className="position-relative cursor-pointer"
                  onClick={() => handleImageClick(product.id)}
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-image"
                  />
                  <Badge
                    pill
                    bg="primary"
                    className="position-absolute top-0 start-0 m-2"
                  >
                    Mới
                  </Badge>
                  
                  {/* Action Buttons */}
                  <div className="product-actions position-absolute top-0 end-0 p-2 d-flex gap-2">
                    <Button 
                      variant="light" 
                      className="action-btn" 
                      onClick={(e) => handleQuickView(product.id, e)}
                    >
                      <FaEye className="action-icon" />
                    </Button>
                    <Button 
                      variant="light" 
                      className="action-btn"
                      onClick={(e) => handleAddToCart(product.id, e)}
                    >
                      <FaShoppingCart 
                        className="action-icon" 
                        color={cartItems[product.id] ? '#0d6efd' : '#6c757d'} 
                      />
                    </Button>
                  </div>
                </div>

                <Card.Body className="text-center">
                  <Card.Title className="mb-3">{product.name}</Card.Title>

                  <div className="d-flex justify-content-center mb-3">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          color={i < product.rating ? "#ffc107" : "#e4e5e9"}
                          className="me-1"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="price mb-3">
                    {product.price.toLocaleString()} VND
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}