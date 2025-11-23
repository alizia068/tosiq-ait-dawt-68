import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";
import { LOGIN_URL } from "../resource/apis";
import { useAuth } from "../AuthContext";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // update
  const handleLogin = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post(LOGIN_URL, data);
      if (response.data.status == true) {
        toast.success(response.data.message);
        login(response.data.token, response.data.user);
        navigate("/");
      } else {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong!");
    } finally {
      
      setIsLoading(false);
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
              {isLoading ? 
              <Button type="submit" variant="primary" disabled>
                Loggining, please wait...
              </Button> : 
              <Button type="submit" variant="primary">
                Login
              </Button>
              }
            </div>
          </Form>
          <hr />
          <div>
            <NavLink to="/forgot-password">Forgot your password? <ins>Click here</ins> </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
