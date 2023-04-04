import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PriceList from './components/PriceList/PriceList';
import Header from './components/Header/Header';
import Chart from './components/Chart/Chart';
import Error from './components/Error/Error';
import Cards from './components/Cards/Cards';
import Contact from './components/Contact/Contact';
import User from './components/User/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header> </Header>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <App> </App>,
      },
      {
        path: "price",
        element: <PriceList> </PriceList>,
      },
      {
        path: "chart",
        element: <Chart></Chart>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "user",
        element: <User></User>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
