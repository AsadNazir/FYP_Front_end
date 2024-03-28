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
import AddStudentForm from './Components/AddStudentForm.jsx';
import ViewAllStudents from './Components/ViewAllStudents.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: '/admin',
        element: <Dashboard />,
        children: [
          {
            path: "/admin/add-student",
            element: <AddStudentForm />
          },
          {
            path: "/admin/add-teacher",
            element: <div>Add Teacher</div>,
          }
          ,
          {
            path: "/admin/course",
            element: <div>Course</div>,
          }
          ,
          {
            path: "/admin/view-students",
            element: <ViewAllStudents />
          }
          ,
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
