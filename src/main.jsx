import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/root/Root';
import Home from './components/layout/Home';
import MyCurt from './components/layout/MyCurt';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ErrorPage from './components/layout/ErrorPage';
import PrivateRoute from './components/provider/PrivateRoute';
import Profile from './components/layout/Profile';
import AuthProvider from './components/provider/AuthProvider';
import AddArt from './components/layout/AddArt';
import UpdateArt from './components/layout/UpdateArt';
import ArtDetails from './components/layout/ArtDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/myCurt',
        element: <PrivateRoute><MyCurt></MyCurt></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/artDetails',
        element: <ArtDetails></ArtDetails>,
      },
      {
        path: '/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>,
      },
      {
        path: '/addArt',
        element: <PrivateRoute> <AddArt></AddArt> </PrivateRoute>,
      },
      {
        path: '/UpdateArt',
        element: <PrivateRoute> <UpdateArt></UpdateArt> </PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
