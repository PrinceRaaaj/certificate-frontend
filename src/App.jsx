import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader/Loader'
import Homepage from './pages/Homepage/Homepage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCertificate from './pages/AddCertificate/AddCertificate'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyCertificate from './pages/VerifyCertificate/VerifyCertificate'

function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "add-certificate",
      element: <AddCertificate />,
    },
    {
      path: "verify-certificate",
      element: <VerifyCertificate />,
    }
  ]);

  

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
