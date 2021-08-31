import React from "react";

const CartContext = React.createContext({
  orders: [
    {
      name: "Roasted Chicken",
      description: "Some black ass soul food",
      orders: 0,
      key: "Roasted Chicken",
    },
    {
      name: "Schnitzel",
      description: "A german speciality!",
      orders: 0,
      key: "Schnitzel",
    },
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      orders: 0,
      key: "Sushi",
    },
    {
      name: "Barbecue Burger",
      description: "Grilled barbecue burger",
      orders: 0,
      key: "Barbecue Burger",
    },
  ],
});

export default CartContext;
