import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbarbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">IES</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/salegstentry">Sale Entry</Nav.Link>
              <Nav.Link href="/saleentry">Estimate Enter</Nav.Link>
              {/* Product Dropdown */}
              <NavDropdown title="Purchase" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/PurchaseEntry">
                  Purchase Entry
                </NavDropdown.Item>
                {/* Add more dropdown items here */}
                <NavDropdown.Item href="/customer">Customer</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Master" id="collasible-nav-dropdown">
                {/* Add more dropdown items here */}
                <NavDropdown.Item href="/product">Product</NavDropdown.Item>
                <NavDropdown.Item href="/customeradd">
                  Customer
                </NavDropdown.Item>
                <NavDropdown.Item href="/Company">Distributor</NavDropdown.Item>
                <NavDropdown.Item href="/userlist">User</NavDropdown.Item>
              </NavDropdown>
              {/* account Dropdown */}

              <NavDropdown title="Account" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/ledger">ledger</NavDropdown.Item>
                <NavDropdown.Item href="/receipt">receipt</NavDropdown.Item>
                <NavDropdown.Item href="/ExpenseList">Expense</NavDropdown.Item>

                {/* Add more dropdown items here */}
              </NavDropdown>

              <NavDropdown title="Setting" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Purchasemenu">
                  Purchase menu
                </NavDropdown.Item>
                {/* Add more dropdown items here */}
                <NavDropdown.Item href="/customer">Customer</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarbar;
