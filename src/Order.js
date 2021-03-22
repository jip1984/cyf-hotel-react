import React, { useState } from "react";
import ResturantButton from "./ResturantButton";

function Order(props) {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <li className="order-li">
        {props.orderType}: {orders}
      </li>
      <ResturantButton handler={orderOne} />
    </div>
  );
}

export default Order;
