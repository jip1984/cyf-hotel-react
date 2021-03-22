import React, { useState } from "react";
import ResturantButton from "./ResturantButton";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders-container">
      <h3 className="resturant-heading">Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salad" />
        <Order orderType="Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
