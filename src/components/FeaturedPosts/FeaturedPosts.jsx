//components/FeaturedPosts/FeaturedPosts.jsx
import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "./FeaturedPosts.css";

// thông tin tĩnh
const posts = [
  {
    title: "Cách chọn cây phong thủy",
    excerpt: "Hướng dẫn chọn cây theo mệnh và hướng nhà",
    image: "/images/hero_1.jpg",
    author: "Nguyễn Văn A",
    date: "2023-10-01",
  },
  {
    title: "Top 5 cây dễ chăm sóc",
    excerpt: "Những loại cây cảnh phù hợp cho người bận rộn",
    image: "/images/hero_2.jpg",
    author: "Trần Thị B",
    date: "2023-10-02",
  },
  {
    title: "Xu hướng cây cảnh 2023",
    excerpt: "Các loại cây đang được ưa chuộng năm nay",
    image: "/images/hero_3.jpg",
    author: "Lê Văn C",
    date: "2023-10-03",
  },
];

// HeartRating component
const HeartRating = ({ likes, setLikes }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setLikes(prev => !prev);
  };

  return (
    <div className="heart-rating">
      <button 
        className="heart-button"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Thích bài viết"
      >
        <FaHeart
          className="transition-all"
          color={likes ? "#ff0000" : isHovered ? "#ff6666" : "#e9ecef"}
          size={20}
        />
      </button>
      <span className="likes-count ms-2">{likes ? 1 : 0}</span>
    </div>
  );
};

// FeaturedPosts component
const FeaturedPosts = () => {
  const [likes, setLikes] = useState({});

  const handleLikeChange = (postIndex, newLike) => {
    setLikes(prev => ({
      ...prev,
      [postIndex]: newLike
    }));
  };

  return (
    <section className="featured-posts py-5">
      <Container>
        <h2 className="text-center mb-5">Bài viết nổi bật</h2>
        <Row>
          {posts.map((post, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="h-100 post-card">
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <Card.Text className="text-muted">
                    {post.author} - {new Date(post.date).toLocaleDateString()}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <HeartRating
                      likes={!!likes[index]}
                      setLikes={(newLike) => handleLikeChange(index, newLike)}
                    />
                    <Button variant="outline-danger">Đọc thêm</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedPosts;