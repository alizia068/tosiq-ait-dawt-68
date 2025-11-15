import React, { useState } from 'react'
import { Button, Container, Form, NavLink } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { VERIFY_OTP_URL } from '../resource/apis';
import toast from 'react-hot-toast';
import axios from 'axios';

const VerifyOtp = () => {
  const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    // update
    const handleVerifyOTP = async (data) => {
      try {
        
        const newData = {
          email: localStorage.getItem("forgotUserEmail"),
          otp: data.otp
        }
        
        setIsLoading(true);
        const response = await axios.post(VERIFY_OTP_URL, newData);
        if (response.data.status == true) {
          toast.success(response.data.message);
          navigate('/reset-password')
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
          <h2>Verify OTP Code</h2>
        </div>

        <div>
          <Form onSubmit={handleSubmit(handleVerifyOTP)}>

            <Form.Group className="mb-3" controlId="formGroupTitle">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                {...register("otp")}
                type="number"
                placeholder="Enter otp code"
              />
            </Form.Group>

            <div className="edit-form-btn">
              {isLoading ? 
              <Button type="submit" variant="primary" disabled>
                Verifying OTP, please wait...
              </Button> : 
              <Button type="submit" variant="primary">
                Verify OTP
              </Button>
              }
            </div>
          </Form>
        </div>
      </div>
    </Container>
  )
}

export default VerifyOtp
