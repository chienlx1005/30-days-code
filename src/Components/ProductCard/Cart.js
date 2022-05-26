import React, { useEffect } from "react";
import { useState } from "react";
import { BiHeart, BiCartAlt } from "react-icons/bi";
import "./Cart.scss";

function Cart() {
  const [check, setCheck] = useState(false);
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(5);

  const handleCheck = () => {
    setCheck(!check);
  };
  const handleAddCart = () => {
    setCount((preCount) => preCount + 1);
  };

  const handleBuyNow = () => {
    alert(`Redirect to cart...5s`);
    if (countDown === 0) {
      setCountDown(5);
    }
  };
  return (
    <>
      <div className="card">
        <div className="card_heart">
          <span
            className={check ? "activeHeart" : ""}
            onClick={() => handleCheck()}
          >
            <BiHeart />
          </span>
          <span className="cart_shop">
            <div className={count === 0 ? "" : "quality"}>
              {count === 0 ? "" : count}
            </div>
            <BiCartAlt />
          </span>
        </div>

        <div className="card_img">
          <img src="./assets/img/nike_shoe.png" />
        </div>
        <div className="card_title">Nike Zoom KD 12</div>
        <div className="card_price">$99</div>
        <div className="card_control">
          <div className="card_size">
            <h3>Size: </h3>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
          <div className="card_color">
            <h3>Color:</h3>
            <span className="card_color-green"></span>
            <span className="card_color-red"></span>
            <span className="card_color-black"></span>
          </div>
          <div className="card_action">
            <button onClick={() => handleBuyNow()}>Buy Now</button>
            <button onClick={() => handleAddCart()}>Add Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
