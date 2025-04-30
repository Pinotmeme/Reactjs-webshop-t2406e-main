import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Form, Modal, Button } from "react-bootstrap";
import { FaShoppingCart, FaBars, FaTimes, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const NAV_ITEMS = [
    { path: "/", label: "Home" },
    { path: "/category/:id", label: "Category" },
    { path: "/checkout", label: "Checkout" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false); 
  // State để kiểm soát việc hiển thị menu trên thiết bị di động.

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992); 
  // State để xác định xem kích thước màn hình hiện tại có phải là desktop (>= 992px) hay không.

  const [searchQuery, setSearchQuery] = useState(""); 
  // State để lưu trữ nội dung tìm kiếm mà người dùng nhập vào.

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992; 
      // Kiểm tra xem kích thước màn hình hiện tại có phải là desktop hay không.

      setIsDesktop(desktop); 
      // Cập nhật state `isDesktop` dựa trên kích thước màn hình hiện tại.

      if (desktop && showMobileMenu) {
        setShowMobileMenu(false); 
        // Tự động đóng menu di động nếu chuyển sang chế độ desktop.
      }
    };

    window.addEventListener("resize", handleResize); 
    // Thêm sự kiện lắng nghe khi kích thước cửa sổ thay đổi.

    return () => window.removeEventListener("resize", handleResize); 
    // Dọn dẹp sự kiện lắng nghe khi component bị hủy.
  }, [showMobileMenu]); 
  // Chạy lại effect mỗi khi `showMobileMenu` thay đổi.

  const handleClose = () => setShowMobileMenu(false); 
  // Hàm để đóng menu di động.

  const handleShow = () => !isDesktop && setShowMobileMenu(true); 
  // Hàm để mở menu di động, chỉ khi màn hình không phải desktop.

  const handleSearch = (e) => {
    e.preventDefault(); 
    // Ngăn chặn hành vi mặc định của form khi submit.

    console.log("Search for:", searchQuery); 
    // Ghi log nội dung tìm kiếm vào console (thay thế bằng logic tìm kiếm thực tế).

    handleClose(); 
    // Đóng menu di động sau khi thực hiện tìm kiếm.
  };

  return (
    <header className="bg-white shadow-sm sticky-top">
      {/* Mobile Menu Modal với thanh tìm kiếm */}
      <Modal
        show={showMobileMenu}
        onHide={handleClose}
        fullscreen="md-down"
        className="d-lg-none"
        backdropClassName="modal-backdrop-mobile"
      >
        <Modal.Header className="border-0 flex-column align-items-start">
          <div className="d-flex justify-content-between w-100 mb-3">
            <Button variant="link" onClick={handleClose}>
              <FaTimes className="fs-4 " />
            </Button>
          </div>
          
          {/* Thanh tìm kiếm mobile */}
          <Form onSubmit={handleSearch} className="w-100 mb-4 position-relative">
            <Form.Control
              type="search"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-pill pe-5" // Bo tròn và thêm padding phải để chứa nút
            />
            <Button 
              variant="primary" 
              className="position-absolute end-0 top-50 translate-middle-y me-2 rounded-pill"
              style={{ height: "80%", width: "40px" }} // Đặt kích thước nút
              type="submit"
            >
              <FaSearch />
            </Button>
          </Form>
        </Modal.Header>

        <Modal.Body>
          <Nav className="flex-column">
            {NAV_ITEMS.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className="py-3 border-bottom"
                onClick={handleClose}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Modal.Body>
      </Modal>

      {/* Main Header */}
      <Container fluid>
        <Row className="align-items-center py-2 border-bottom g-0">
          {/* Mobile Menu Button */}
          <Col xs={2} className="d-lg-none text-start">
            <Button variant="link" onClick={handleShow}>
              <FaBars className="fs-4" />
            </Button>
          </Col>

          {/* Logo */}
          <Col xs={8} lg={3} className="text-center">
            <img
              src="/images/logo.png"
              className="img-fluid"
              alt="Website Logo"
              style={{ maxHeight: "50px" }}
            />
          </Col>

          {/* Search Bar - Desktop */}
          <Col lg={6} className="d-none d-lg-block">
            <Form className="d-flex position-relative">
              <Form.Control
                type="search"
                placeholder="Search for products"
                className="rounded-pill pe-5" // Thêm padding phải để chứa nút
              />
              <Button 
                variant="primary" 
                className="position-absolute end-0 top-50 translate-middle-y me-1 rounded-pill"
                style={{ height: "80%", width: "40px" }} // Đặt kích thước nút
              >
                <FaSearch />
              </Button>
            </Form>
          </Col>

          {/* Cart Icon and User Icon */}
          <Col xs={2} lg={2} className="text-end">
            <Link to="/login" className="text-dark position-relative me-3">
              <FaUser className="fs-4" />
            </Link>
            <Link to="/cart-detail" className="text-dark position-relative">
              <FaShoppingCart className="fs-4" />
            </Link>
          </Col>
        </Row>

        {/* Desktop Navigation */}
        <Row className="d-none d-lg-block">
          <Col>
            <Nav className="justify-content-center py-2">
              {NAV_ITEMS.map((item) => (
                <Nav.Link
                  key={item.path}
                  as={Link}
                  to={item.path}
                  className="px-4 text-dark fw-medium"
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
