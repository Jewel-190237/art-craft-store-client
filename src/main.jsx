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
import AuthProvider from './components/provider/AuthProvider';
import AddArt from './components/layout/AddArt';
import UpdateArt from './components/layout/UpdateArt';
import ArtDetails from './components/layout/ArtDetails';
import AllArts from './components/layout/AllArts';
import Contact from './components/layout/Contact';
import Profile from './components/layout/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://art-and-craft-store-server-roan.vercel.app/arts')
      },
      {
        path: '/allArts',
        element: <AllArts></AllArts>,
        loader: () => fetch('https://art-and-craft-store-server-roan.vercel.app/arts')
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
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/artDetails/:id',
        element: <PrivateRoute><ArtDetails></ArtDetails></PrivateRoute>
      },
      {
        path: '/addArt',
        element: <PrivateRoute> <AddArt></AddArt> </PrivateRoute>,
      },  
      {
        path: '/profile',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>,
      },  
      {
        path: '/UpdateArt/:id',
        element: <PrivateRoute> <UpdateArt></UpdateArt> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-roan.vercel.app/update/${params.id}`)
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
