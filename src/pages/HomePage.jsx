// pages/HomePage.js
import React from "react";
import HeroCarousel from "../components/HeroCarousel/Carousel";
import CategoriesSlider from "../components/CategoriesSlider/CategoriesSlider";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";

// Thêm dữ liệu mẫu
const products = [
  {
    id: 1,
    name: "Cây Lưỡi Hổ",
    price: 199000,
    rating: 4,
    image: "/images/hero_1.jpg",
  },
  {
    id: 2,
    name: "Cây Trầu Bà",
    price: 159000,
    rating: 5,
    image: "/images/hero_1.jpg",
  },
  {
    id: 3,
    name: "Cây Kim Tiền",
    price: 299000,
    rating: 4.5,
    image: "/images/hero_1.jpg",
  },
  {
    id: 4,
    name: "Cây Xương Rồng",
    price: 99000,
    rating: 4,
    image: "/images/hero_1.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroCarousel />

      <div className="container mt-5">
        <CategoriesSlider />
        <ProductGrid products={products} />
      </div>

      <ServiceSection />
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;
