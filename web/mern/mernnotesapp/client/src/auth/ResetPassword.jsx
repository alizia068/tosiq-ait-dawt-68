import React, { useState } from 'react'
import { Button, Container, Form, NavLink } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { FORGOT_PASSWORD_URL, RESET_PASSWORD_URL } from '../resource/apis';
import toast from 'react-hot-toast';
import axios from 'axios';

const ResetPassword = () => {
  const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    // update
    const handleResetPassword = async (data) => {
      try {
        setIsLoading(true);
        const newData = {
          email: localStorage.getItem("forgotUserEmail"),
          newPassword: data.newPassword
        }
        const response = await axios.post(RESET_PASSWORD_URL, newData);
        if (response.data.status == true) {
          toast.success(response.data.message);
          localStorage.setItem("forgotUserEmail", data.email)
          navigate('/login')
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
          <h2>Reset your password</h2>
        </div>

        <div>
          <Form onSubmit={handleSubmit(handleResetPassword)}>

            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                {...register("newPassword")}
                type="password"
                placeholder="Enter new password"
              />
            </Form.Group>

            <div className="edit-form-btn">
              {isLoading ? 
              <Button type="submit" variant="primary" disabled>
                Reset your password, please wait...
              </Button> : 
              <Button type="submit" variant="primary">
                Reset password
              </Button>
              }
            </div>
          </Form>
        </div>
      </div>
    </Container>
  )
}

export default ResetPassword
