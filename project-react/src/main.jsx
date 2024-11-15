import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from "react-router-dom"
import ReactDOM from "react-dom/client"
import { UserProvider } from "./assets/context/UserContext.jsx";
import Blog from './assets/components/Blog.jsx'
import Home from './Home.jsx';
import Form from './assets/components/Form.jsx';
import BlogCreation from './assets/components/BlogCreation.jsx';
import Signup from './assets/components/Signup.jsx';
import Profile from './assets/components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home/>},
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/login",
        element: <Form/>
      },
      {
        path: "/createyours",
        element: <BlogCreation/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/profile",
        element: <Profile/>
      }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
   <RouterProvider router={router} />
   </UserProvider>
  </React.StrictMode>
)