import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <Link to={"/product/" + product.id}>
        <img className="image" src={product.images[0]} alt={product.name} />
        <span className="name">{product.name}</span>
        <span className="price">${product.price}</span>
      </Link>
    </div>
  );
};

export default ProductCard;