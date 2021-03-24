import React, { useState } from "react";
import ResturantButton from "./ResturantButton";

function Order(props) {
  const [orders, setOrders] = useState(() => 0);
  function orderOne() {
    setOrders(prevValue => prevValue + 1);
  }
  function orderOneLess() {
    setOrders(prevValue => prevValue - 1);
  }

  return (
    <li className="order-li">
      {props.orderType}: {orders}
      <ResturantButton handler={orderOne} handler2={orderOneLess} />
    </li>
  );
}

export default Order;
