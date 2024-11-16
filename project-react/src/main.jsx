import React from 'react';
import ReactDOM from 'react-dom/client';  // Only import this once
import './index.css';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserProvider } from './assets/context/UserContext.jsx';
import Blog from './assets/components/Blog.jsx';
import Home from './Home.jsx';
import Form from './assets/components/Form.jsx';
import BlogCreation from './assets/components/BlogCreation.jsx';
import Signup from './assets/components/Signup.jsx';
import Profile from './assets/components/Profile.jsx';

// Define the routes for the app
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Form /> },
      { path: "/createyours", element: <BlogCreation /> },
      { path: "/signup", element: <Signup /> },
      { path: "/profile", element: <Profile /> }
    ],
  },
]);

// Render the React app with Router and context
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
