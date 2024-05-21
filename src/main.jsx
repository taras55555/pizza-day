import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Menu from './components/Menu/Menu';
import ErrorPage from "./error-page";
import './index.css';
import UserNameContext from './contexts/UserName.jsx';

const router = createBrowserRouter([
  {
    path: "/pizza-day",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pizza-day/",
        element: <Home />,
      },
      {
        path: "/pizza-day/menu",
        element: <Menu />,
      },
      {
        path: "/pizza-day/auth",
        element: <Auth />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserNameContext>
      <RouterProvider router={router} />
    </UserNameContext>
  </React.StrictMode>,
)
