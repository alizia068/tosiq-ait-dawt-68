import React, { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

const Nav = ({children}) => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const handleLogout = () => {
    let userToken = localStorage.getItem("token");
    if (userToken) {
      localStorage.removeItem("token");
      navigate('/login');
      setShowLogout(true);
      toast.success("User Logout successful")
      return;
    } else {
      toast.error("Failed to logout")   
      setShowLogout(false);   
    }
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Notify</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
          { showLogout ? <NavLink to={'/login'}>Login</NavLink> :
          <>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> | 
          <Navbar.Text>
            <Button variant="danger" onClick={handleLogout}>LOGOUT</Button>
          </Navbar.Text>
          </>
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
