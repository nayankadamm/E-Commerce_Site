import React from "react";
import { Navbar, Container, Nav, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/usersApliSlice";
import {useNavigate} from 'react-router-dom'
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const {userInfo} = useSelector((state)=>state.auth)
const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApiSlice] = useLogoutMutation();


  console.log(cartItems);
  const logoutHandler = async (e)=>{
    await logoutApiSlice().unwrap();
    dispatch(logout());
    navigate('/login')
  }


  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="proshop" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="danger" style={{ marginLeft: "5px" }}>
                      {cartItems.reduce((acc, num) => acc + num.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {
                userInfo ?(
                  <NavDropdown title= {userInfo.name} id="username">
                      <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ):(
                  <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser />
                  Sign In
                </Nav.Link>
              </LinkContainer>
                )
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
