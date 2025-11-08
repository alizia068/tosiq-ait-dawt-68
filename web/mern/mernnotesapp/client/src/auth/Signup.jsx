import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SIGNUP_URL } from "../resource/apis";
import { useNavigate, NavLink } from "react-router";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // register user
  const handleSignup = async (data) => {
    if (!data.name || !data.email || !data.password) {
      return toast.error("Signup fields are required");
    }
    try {
      setIsLoading(true);
      const response = await axios.post(SIGNUP_URL, data);
      if (response.data.status == true) {
        toast.success(response.data.message);
        navigate("/login");
        return;
      } else {
        toast.error(response.data.message);
        return;
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div>
        <div className="my-4 notes-header">
          <h2>Signup</h2>
          <div>
            <NavLink variant="primary" to="/login">
              Login
            </NavLink>
          </div>
        </div>

        <div>
          <Form onSubmit={handleSubmit(handleSignup)}>
            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register("name")}
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

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
              {isLoading ? (
                <Button type="submit" variant="primary" disabled>
                  Signing up please wait...
                </Button>
              ) : (
                <Button type="submit" variant="primary">
                  Signup
                </Button>
              )}
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
