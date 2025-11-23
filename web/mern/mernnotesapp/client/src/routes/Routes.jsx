import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import DetailNote from "../pages/DetailNote.jsx";
import NotesList from "../pages/NotesList.jsx";
import Login from "../auth/Login.jsx";
import Signup from "../auth/Signup.jsx";
import ForgotPassword from "../auth/ForgotPassword.jsx";
import VerifyOtp from "../auth/VerifyOtp.jsx";
import ResetPassword from "../auth/ResetPassword.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

const Routes = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <PublicRoute> <Login /> </PublicRoute> },
    { path: "/signup", element: <PublicRoute> <Signup /> </PublicRoute> },
    { path: "/forgot-password", element: <PublicRoute> <ForgotPassword /> </PublicRoute> },
    { path: "/verify-otp", element: <PublicRoute> <VerifyOtp /> </PublicRoute> },
    { path: "/reset-password", element: <PublicRoute> <ResetPassword /> </PublicRoute> },

    { path: "/", element: <ProtectedRoute> <NotesList /> </ProtectedRoute>},
    { path: "/notes/edit/:id", element: <ProtectedRoute> <DetailNote /> </ProtectedRoute> },
    { path: "/notes/update", element: <ProtectedRoute> <NotesList /> </ProtectedRoute> },
    { path: "*", element: <ProtectedRoute> <Navigate to={'/'} replace /> </ProtectedRoute>},
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
