import React from "react";
import { Container, Menu } from "semantic-ui-react";

const AppMenu = () => {
  return (
    <Menu>
      <Container>
        <Menu.Menu position="right">
          <Menu.Item as="a" name="login">
            Login
          </Menu.Item>

          <Menu.Item as="a" name="register">
            Register
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default AppMenu;
