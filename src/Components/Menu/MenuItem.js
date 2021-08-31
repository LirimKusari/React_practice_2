import React, { useState } from "react";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
  width: 70rem;
  color: black;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = ({ order }) => {
  const [amount, setAmount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    if (amount > 0) {
      order.orders = order.orders += +amount;
      console.log(order.orders);
    }

    setAmount("1");
  };

  return (
    <MenuItemWrapper>
      <div className="info">
        <h3>{order.name}</h3>
        <p>{order.description}</p>
        <p className="price"></p>
      </div>

      <form className="addToCart" onSubmit={submitHandler}>
        <label htmlFor="add">Amount </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        ></input>
        <button type="submit">add</button>
      </form>
    </MenuItemWrapper>
  );
};

export default MenuItem;
