import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productData } from "./api/Api";
import SingleProduct from "./components/SingleProduct";
import Login from "./pages/Login";

function App() {
  const Layout = () => {
    return (
      <div>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: productData,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div className=" font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
