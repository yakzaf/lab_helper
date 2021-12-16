import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Route, Switch, Link} from "react-router-dom";

const Navigation = () => {
    return (
      <div className={"navbar"}>
        <div>
          <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
            <Container>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/circuit-sim'>Falstad Circuit Simulator</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route exact path='/circuit-sim' component={Simulator} />
          </Switch>
        </div>
      </div>
    )
}

export default Navigation;