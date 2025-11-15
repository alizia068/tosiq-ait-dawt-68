import React, { useEffect, useState } from "react";
import { Button, Container, Navbar, NavDropdown } from "react-bootstrap";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

const Nav = ({ children }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const userToken = localStorage.getItem("token");
  const authUser = JSON.parse(localStorage.getItem("authUser"));
  useEffect(() => {
    if (userToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  const handleLogout = () => {
    if (userToken) {
      localStorage.removeItem("token");
      navigate("/login");
      toast.success("User Logout successful");
      return;
    } else {
      toast.error("Failed to logout");
    }
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Notify</Navbar.Brand>

        {children}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!isLogin ? (
            <NavLink to={"/login"}>Login</NavLink>
          ) : (
            <>
              <Navbar.Text>
                Signed in as: {authUser ? authUser?.name : "Name not fetched"}
              </Navbar.Text>{" "}
              | <NavLink onClick={handleLogout}>LOGOUT</NavLink>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
