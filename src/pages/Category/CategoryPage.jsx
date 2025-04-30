import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./CategoryPage.css";

const categories = [
  { name: "Cây để bàn", slug: "cay-de-ban" },
  { name: "Chậu trồng cây", slug: "chau-trong-cay" },
  { name: "Dụng cụ làm vườn", slug: "dung-cu-lam-vuon" },
  { name: "Đất trồng cây", slug: "dat-trong-cay" },
  { name: "Hạt giống", slug: "hat-giong" },
  { name: "Phân bón dưỡng chất", slug: "phan-bon" },
  { name: "Thiết bị tưới", slug: "thiet-bi-tuoi" },
  { name: "Thương hiệu", slug: "thuong-hieu" },
  { name: "Thủy sinh", slug: "thuy-sinh" },
  { name: "Trang trí sân vườn", slug: "trang-tri-san-vuon" },
];

const CategoryPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  // ✅ Thêm state lưu option sắp xếp
  const [sortOption, setSortOption] = React.useState("default");

  // ✅ Dữ liệu mẫu (cần thay thế bằng API thực tế)
  const sampleProducts = [
    { name: "Cây bạc hà socola", price: 128000, image: "/images/hero_1.jpg" },
    { name: "Cây bạc hà táo", price: 45000, image: "/images/hero_2.jpg" },
    { name: "Cây bạch đàn chanh", price: 180000, image: "/images/hero_3.jpg" },
    { name: "Cây bàng Singapore", price: 300000, image: "/images/hero_1.jpg" },
  ];

  // ✅ Hàm sắp xếp theo lựa chọn người dùng
  const sortedProducts = React.useMemo(() => {
    const products = [...sampleProducts]; // sao chép để không làm thay đổi dữ liệu gốc
    switch (sortOption) {
      case "price_asc":
        return products.sort((a, b) => a.price - b.price);
      case "price_desc":
        return products.sort((a, b) => b.price - a.price);
      case "newest":
        return products; // cần thêm field "createdAt"
      case "bestseller":
        return products; // cần thêm field "sold"
      default:
        return products;
    }
  }, [sortOption]);

  return (
    <Container className="py-4">
      <Row>
        {/* Sidebar menu */}
        <Col md={3}>
          <h5 className="mb-3 fw-semibold">Danh mục sản phẩm</h5>
          <ListGroup>
            {categories.map((cat) => (
              <ListGroup.Item
                key={cat.slug}
                action
                active={slug === cat.slug}
                onClick={() => navigate(`/home/${cat.slug}`)}
              >
                {cat.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Product area */}
        <Col md={9}>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h4 className="mb-0 text-dark text-capitalize">
              {categories.find((c) => c.slug === slug)?.name || "Danh mục"}
            </h4>

            <select
              className="form-select w-auto"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sắp xếp theo</option>
              <option value="price_asc">Giá: Thấp → Cao</option>
              <option value="price_desc">Giá: Cao → Thấp</option>
              <option value="newest">Mới nhất</option>
              <option value="bestseller">Bán chạy</option>
            </select>
          </div>
          <Row>
            {sortedProducts.map((product, index) => (
              <Col xs={6} md={3} key={index} className="mb-4">
                <div className="text-center border rounded p-2 h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded mb-2"
                  />
                  <div className="fw-semibold">{product.name}</div>
                  <div className="text-success">
                    {typeof product.price === "string"
                      ? product.price
                      : product.price.toLocaleString("vi-VN") + " đ"}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryPage;
