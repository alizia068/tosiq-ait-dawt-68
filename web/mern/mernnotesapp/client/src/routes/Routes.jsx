import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router'
import DetailNote from '../DetailNote.jsx'
import NotesList from '../NotesList.jsx'
import Login from '../auth/Login.jsx'
import Signup from '../auth/Signup.jsx'

const Routes = () => {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },

    { path: "/", element: <NotesList /> },
    { path: "/notes/edit/:id", element: <DetailNote /> },
    { path: "/notes/update", element: <NotesList /> },
  ]);
  return <RouterProvider router={router}/>
};

export default Routes;
