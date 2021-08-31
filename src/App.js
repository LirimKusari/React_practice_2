import styled, { createGlobalStyle } from "styled-components";
import React, { useContext } from "react";
import Card from "./Components/UI/Card";
import MenuItem from "./Components/Menu/MenuItem";
import MainHeader from "./Components/Header/MainHeader";

import CartContext from "./Components/Store/cart-context";

const Body = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: #262526;
  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .aboutUS {
    max-width: 50%;
    margin-top: 14rem;
    padding: 0 1rem 2rem 1rem;
    text-align: center;
    background: #323032;

    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.3rem;
    }
  }

  .menu {
    margin-top: 3rem;
    margin-bottom: 4rem;
    max-width: 70%;
    background: white;
  }
`;

function App() {
  let cartContext = useContext(CartContext);
  // cartContext = cartContext.orders;

  return (
    <AppWrapper>
      <Body />
      <MainHeader></MainHeader>

      <Card className="aboutUS">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Chose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experinced chefs!
        </p>
      </Card>

      <Card className="menu">
        {cartContext.orders.map((order) => {
          return <MenuItem order={order} key={order.key}></MenuItem>;
        })}
      </Card>
    </AppWrapper>
  );
}

export default App;
