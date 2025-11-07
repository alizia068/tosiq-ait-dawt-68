import axios from "axios";
import React, { useEffect } from "react";
import { Button, Container, Form, NavLink } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  // update
  const handleLogin = async (data) => {
    try {
      
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container>
      <div>
        <div className="my-4 notes-header">
          <h2>Login</h2>
          <div>
            <NavLink variant="primary" to="/signup">
              Signup
            </NavLink>
          </div>
        </div>

        <div>
          <Form onSubmit={handleSubmit(handleLogin)}>

            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password")}
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>

            <div className="edit-form-btn">
              <Button type="submit" variant="primary">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
