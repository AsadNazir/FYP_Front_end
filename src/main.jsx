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
import Student from './Components/Student.jsx';
import ViewAllStudents from './Components/ViewAllStudents.jsx';
import Teacher from './Components/Teacher.jsx';
import Course from './Components/Course.jsx';
import Grading from './Components/Grading.jsx';

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
            element: <Student />
          },
          {
            path: "/admin/add-teacher",
            element: <Teacher />,
          }
          ,
          {
            path: "/admin/course",
            element: <Course />,
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
          {
            path: "/admin/grading",
            element: <Grading/>,
          },
          {
            path: "/admin/department",
            element: <div>Department</div>,
          },
          {
            path: "/admin/session",
            element: <div>Session</div>,
          },
          {
            path: "/admin/batch",
            element: <div>Batch</div>,
          },
          {
            path: "/admin/campus",
            element: <div>Campus</div>,
          },
          {
            path: "/admin/profile",
            element: <div>Profile</div>,

          }
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
