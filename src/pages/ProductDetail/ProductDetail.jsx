// pages/ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Breadcrumb, Badge } from 'react-bootstrap';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import productsData from '../../data/products'; // Giả sử có file dữ liệu sản phẩm
import './ProductDetail.css';
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Giả lập API call
    const fetchProduct = async () => {
      try {
        const foundProduct = productsData.find(p => p.id === parseInt(id));
        if (!foundProduct) throw new Error('Product not found');
        setProduct(foundProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center py-5 text-danger">{error}</div>;
  if (!product) return <div className="text-center py-5">Product not found</div>;

  return (
    <Container className="py-5">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="g-4">
        {/* Product Images */}
        <Col lg={6}>
          <Card className="h-100">
            <Card.Img 
              variant="top" 
              src={product.image} 
              className="product-detail-image"
            />
          </Card>
        </Col>

        {/* Product Info */}
        <Col lg={6}>
          <div className="product-info">
            <h1 className="mb-3">{product.name}</h1>
            
            <div className="d-flex align-items-center mb-4">
              <div className="rating me-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < product.rating ? '#ffc107' : '#e4e5e9'}
                  />
                ))}
              </div>
              <span className="text-muted">({product.reviews} reviews)</span>
            </div>

            <div className="price mb-4">
              <h2 className="text-primary">
                {product.price.toLocaleString()} VND
              </h2>
              {product.oldPrice && (
                <del className="text-muted ms-2">
                  {product.oldPrice.toLocaleString()} VND
                </del>
              )}
            </div>

            <p className="lead mb-4">{product.description}</p>

            <div className="d-flex gap-3 mb-4">
              <Button variant="primary" size="lg" className="flex-grow-1">
                <FaShoppingCart className="me-2" />
                Add to Cart
              </Button>
            </div>

            <div className="product-meta">
              <h5 className="mb-3">Product Details</h5>
              <Row className="g-3">
                <Col md={6}>
                  <dl>
                    <dt>Category</dt>
                    <dd>{product.category}</dd>
                    
                    <dt>Stock</dt>
                    <dd>
                      <Badge bg={product.inStock ? 'success' : 'danger'}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </Badge>
                    </dd>
                  </dl>
                </Col>
                <Col md={6}>
                  <dl>
                    <dt>Dimensions</dt>
                    <dd>{product.dimensions}</dd>
                    
                    <dt>Weight</dt>
                    <dd>{product.weight}</dd>
                  </dl>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;