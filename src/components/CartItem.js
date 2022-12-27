import { useEffect, useState } from "react";
import "../styles/CartItem.css";

const CartItem = ({ item, setCarts }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const onChangeInput = (value) => {
    if (value < 0) {
      setQuantity(0);
    } else {
      setQuantity(value);
    }
  };

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("cart")) || [];
    const product = carts.find(
      (element) =>
        element.id === item.id &&
        element.color === item.color &&
        element.size === item.size
    );
    product.quantity = quantity;

    localStorage.setItem("cart", JSON.stringify(carts));
    setCarts(carts);
  }, [quantity]);

  return (
    <div className="item">
      <img className="image" src={item.image} alt="" />
      <div>
        <p className="name">Sản phẩm: {item.name}</p>
        <p className="name">size: {item.size}</p>
        <p className="name">
          color:{" "}
          <div
            style={{
              backgroundColor: item.color,
              width: "15px",
              height: "15px",
              display: "inline-block",
              border: "solid 1px black",
            }}
          ></div>
        </p>
      </div>
      <span className="price">{+item.price} VND</span>
      <div className="quantity">
        <button onClick={() => onChangeInput(quantity - 1)}>-</button>
        <input
          type="text"
          value={quantity}
          onChange={(event) => onChangeInput(event.target.value)}
        />
        <button onClick={() => onChangeInput(quantity + 1)}>+</button>
      </div>

      <span className="total">{+item.price * item.quantity} VND</span>
    </div>
  );
};

export default CartItem;