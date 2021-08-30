import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import Card from "./Components/UI/Card";

const Body = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: #555;
  z-index: -5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppWrapper>
      <Body />
      <Card></Card>
    </AppWrapper>
  );
}

export default App;
