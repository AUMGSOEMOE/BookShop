import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const CartComponent = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      <img src={data.image} alt="" />
      <div>
        <h3>{data.title}</h3>
        <h5>{data.author}</h5>
      </div>
    </div>
  );
};

export default CartComponent;
