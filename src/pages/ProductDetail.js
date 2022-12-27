import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../__mockup/product";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find(
    (item) => item.id === parseInt(productId)
  );

  const [color, setColor] = useState(currentProduct.colors[0]);
  const [size, setSize] = useState(currentProduct.sizes[0]);

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };

  const addToCart = () => {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const product = carts.find(
      (item) =>
        item.id === currentProduct.id &&
        item.color === color &&
        item.size === size
    );

    if (product === undefined) {
      carts.push({
        id: currentProduct.id,
        image: currentProduct.images[0],
        name: currentProduct.name,
        price: currentProduct.price,
        size: size,
        color: color,
        quantity: 1,
      });
    } else {
      product.quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(carts));
  };
  return (
    <div className="productDetail">
      <div className="container">
        <div className="images">
          <img
            className="main-image"
            src={currentProduct.images[0]}
            alt={currentProduct.name}
          />
          <div className="list-images">
            {currentProduct.images.map((item, index) => (
              <img key={index} src={item} alt={item} />
            ))}
          </div>
        </div>
        <div className="information">
          <h4>{currentProduct.name}</h4>
          <p>{currentProduct.description}</p>
          <p>{currentProduct.price}</p>
          <div className="size">
            {currentProduct.sizes.map((item) => (
              <span key={item}>
                <input
                  id={item}
                  name="size"
                  type={"radio"}
                  value={item}
                  checked={item === size}
                  onChange={handleChangeSize}
                />
                <label htmlFor={item}>{item}</label>
              </span>
            ))}
          </div>
          <div className="color">
            {currentProduct.colors.map((item) => (
              <span key={item}>
                <input
                  id={item}
                  name="color"
                  type={"radio"}
                  value={item}
                  checked={item === color}
                  onChange={handleChangeColor}
                />
                <label htmlFor={item}>
                  <div
                    style={{
                      backgroundColor: item,
                      width: "15px",
                      height: "15px",
                      display: "inline-block",
                      border: "solid 1px black",
                    }}
                  ></div>
                </label>
              </span>
            ))}
          </div>
          <button onClick={addToCart}>Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;