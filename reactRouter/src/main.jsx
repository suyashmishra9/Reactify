import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Layout from './layout';
import Contact from './components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [{
      path: "",
      element: <Home/>
    }, {
      path: '/about',
      element: <About/>
    }, {
      path: '/contact_us',
      element: <Contact/>
    }, {
      path: '/user/:id',
      element: <Contact/>
    }]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
