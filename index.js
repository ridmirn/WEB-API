import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Searchtickets from './components/flightdetails';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "searchingtickets",
    element:<Searchtickets/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router= {router} />
);


