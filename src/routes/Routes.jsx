import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/books/:id",
          element: <BookDetails />,
          loader: () => fetch('../booksData.json')

        },
      ]
    },
  ]);