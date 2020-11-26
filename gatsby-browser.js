import "./src/css/main.css";
import React from "react";
import { SidebarProvider } from "./src/context/sidebar";

export const wrapRootElement = ({ element }) => {
  return <SidebarProvider>{element}</SidebarProvider>;
};
