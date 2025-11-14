import React, { useState } from 'react'
import { Button, Container, Form, NavLink } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { FORGOT_PASSWORD_URL } from '../resource/apis';
import toast from 'react-hot-toast';
import axios from 'axios';

const ForgotPassword = () => {
  const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    // update
    const handleSendOTP = async (data) => {
      try {
        setIsLoading(true);
        const response = await axios.post(FORGOT_PASSWORD_URL, data);
        if (response.data.status == true) {
          toast.success(response.data.message);
          // navigate('/verify-otp')
          return;
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
          <h2>Forgot your password</h2>
        </div>

        <div>
          <Form onSubmit={handleSubmit(handleSendOTP)}>

            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <div className="edit-form-btn">
              {isLoading ? 
              <Button type="submit" variant="primary" disabled>
                Sending OTP, please wait...
              </Button> : 
              <Button type="submit" variant="primary">
                Send OTP
              </Button>
              }
            </div>
          </Form>
        </div>
      </div>
    </Container>
  )
}

export default ForgotPassword
