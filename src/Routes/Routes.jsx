import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Bookdetails from "../Pages/BookDetails/Bookdetails";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      }, {
        path: '/Bookdetails/:id',
        Component: Bookdetails,

        loader: () => fetch('/booksData.json').then(res => res.json()),

      },{
        path: "/toRead" ,
        Component: PagesToRead,
      }
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
