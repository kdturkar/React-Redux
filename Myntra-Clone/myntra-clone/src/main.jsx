import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Bag from './components/Bag.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {   
        path: "/",
        element: <App></App>
      },
      {
        path: "/bag",
        element: <Bag></Bag>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
