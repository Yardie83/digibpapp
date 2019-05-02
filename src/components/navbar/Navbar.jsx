import React from "react";
import { Segment, Menu, Container, Icon, Header } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Segment>
      <Menu fixed="top" style={{backgroundColor: "#f7f7f7"}}>
        <Container style={{paddingTop: "10px"}}>
            <Header as="h4" icon>
              <Icon name="houzz" />
              DigiBP Job Board
            </Header>
        </Container>
      </Menu>
    </Segment>
  );
};
export default Navbar;
