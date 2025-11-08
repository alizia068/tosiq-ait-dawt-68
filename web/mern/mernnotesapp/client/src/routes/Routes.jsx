import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router'
import DetailNote from '../DetailNote.jsx'
import NotesList from '../NotesList.jsx'
import Login from '../auth/Login.jsx'
import Signup from '../auth/Signup.jsx'
import ForgotPassword from '../auth/ForgotPassword.jsx'
import VerifyOtp from '../auth/VerifyOtp.jsx'
import ResetPassword from '../auth/ResetPassword.jsx'

const Routes = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/verify-otp", element: <VerifyOtp /> },
    { path: "/reset-password", element: <ResetPassword /> },

    { path: "/", element: <NotesList /> },
    { path: "/notes/edit/:id", element: <DetailNote /> },
    { path: "/notes/update", element: <NotesList /> },
    { path: "*", element: <NotesList /> },

  ]);
  return <RouterProvider router={router}/>
};

export default Routes;
