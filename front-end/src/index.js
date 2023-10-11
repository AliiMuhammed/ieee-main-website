import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./Router";
import "./Style/index.css";
import "@fontsource/cairo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
