import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './Pages/Login.jsx';
import NotFound from './Pages/NotFound.jsx';
import Dashboard from './Pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<NotFound  />,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: '/admin',
        element: <Dashboard/>,
        children: [
          {
            path: "/admin/users",
            element: <div>Users</div>,
          },
          {
            path: "/admin/settings",
            element: <div>Settings</div>,
          },
        ]

      }
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
