import React from "react";
import { Outlet } from "react-router";
import { SideMenu } from "./components/SideMenu";
import "./style/admin.css";
export const Admin = () => {
  return (
    <>
      <SideMenu />
      <Outlet />
    </>
  );
};
