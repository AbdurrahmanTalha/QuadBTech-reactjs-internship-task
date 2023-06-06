import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './page/Home.jsx'
import ShowDetails from './page/ShowDetails'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/show/:id",
        element: <ShowDetails />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
