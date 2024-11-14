import { createBrowserRouter, } from "react-router-dom";
import HomeLayOut from "../layouts/HomeLayOut";
import CategoryNews from "../pages/CategoryNews";
import { Navigate } from "react-router-dom";



const router =  createBrowserRouter([
    {
      path: "/",
      element:<HomeLayOut></HomeLayOut>,
      children:[
        {
          path:"",
          element:<Navigate to={'/category/01'}>hi</Navigate>,
        },
        {
          path:'/category/:id',
          element:<CategoryNews></CategoryNews>,
          loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        },
      ],
    },
    {
        path: "/news",
        element: <h1>News Layout</h1>,
      },
      {
        path: "auth",
        element: <h1>auth Login Layout</h1>,
      },
      {
        path: "*",
        element: <h1>Error</h1>,
      },
  ]);

export default router;