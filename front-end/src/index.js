import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./Router";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);

