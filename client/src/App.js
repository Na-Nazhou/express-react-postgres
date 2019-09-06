import React from "react";
import { Container } from "semantic-ui-react";
import AppRouter from "./components/AppRouter";
import AppMenu from "./components/AppMenu";

const App = () => {
  return (
    <>
      <AppMenu />
      <Container>
        <AppRouter />
      </Container>
    </>
  );
};

export default App;
