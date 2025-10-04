import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Help from '../pages/Help'
import Team from '../pages/Team'
import Page404 from '../pages/Page404'
import TeamDetails from '../pages/TeamDetails'

const Routes = () => {

    const router = createBrowserRouter([
        {path: "/", element: <Home />},
        {path: "/team", element: <Team />},
        {path: "/team/:id", element: <TeamDetails />},
        {path: "/about", element: <About />},
        {path: "/blog", element: <Blog />},
        {path: "/help", element: <Help />},

        // 404 not found
        {path: "*", element: <Page404 />}
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes
