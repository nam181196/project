import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../__mockup/product";
import "../styles/Home.css"
const Home = () => {
  return (
    <div>
      <img />
      {/* banner */}
      <div className="listProduct">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;