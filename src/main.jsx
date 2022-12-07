import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Modal from './routes/Modal'
import ImageSlider from './routes/ImageSlider'
import Countdown from './routes/Countdown'
import Projects from './routes/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Projects />
      },
      {
        path: '/countdown',
        element: <Countdown />
      },
      {
        path: '/modal',
        element: <Modal />
      },
      {
        path: '/imageslider',
        element: <ImageSlider />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
