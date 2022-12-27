import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += +item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [carts]);

  return (
    <div className="cart">
      <div className="header-container">
        <div className="header">
          <div className="price">Giá</div>
          <div className="quantity">Số lượng</div>
          <div className="total">Tổng tiền</div>
        </div>
      </div>
      {carts.map((item, index) => (
        <CartItem
          key={"index: " + index + ", id: " + item.id}
          item={item}
          setCarts={setCarts}
        />
      ))}
      <div className="cart-price">Tổng: {totalPrice}VND</div>
    </div>
  );
};

export default Cart;
