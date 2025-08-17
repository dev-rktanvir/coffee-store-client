import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './Layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import AddCoffee from './pages/addCoffee/AddCoffee.jsx';
import CoffeeDetails from './pages/CoffeeDetails/CoffeeDetails.jsx';
import UpdateCoffee from './pages/updateCoffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch('http://localhost:5000/coffees'),
        Component: Home
      },
      {
        path: "/add-coffee",
        Component: AddCoffee
      },
      {
        path: "/coffee-details/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: "/update-coffee/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
