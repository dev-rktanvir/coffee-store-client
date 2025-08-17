import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './Layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import AddCoffee from './pages/addCoffee/AddCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/add-coffee",
        Component: AddCoffee
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
