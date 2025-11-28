import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../website/Home.jsx'
import Dashboard from '../admin/Dashboard.jsx'

const Routes = () => {

    const router = createBrowserRouter([
        { path: '/', element: <Home />  }, // user home page
        { path: '/admin', element: <Dashboard /> }, // about page
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes
