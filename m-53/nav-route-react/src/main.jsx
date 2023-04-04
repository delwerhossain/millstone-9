import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PriceList from "./components/PriceList/PriceList";
import Header from "./components/Header/Header";
import Chart from "./components/Chart/Chart";
import Error from "./components/Error/Error";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostsDetails from "./components/PostsDetails/PostsDetails";

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
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "user/:id",
        element: <UserDetails></UserDetails>,
        loader: ({params})=>  fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "posts/:id",
        element: <PostsDetails></PostsDetails>,
        loader: ({params})=>  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
      {
        path: "*",
        element: <Error> </Error>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
