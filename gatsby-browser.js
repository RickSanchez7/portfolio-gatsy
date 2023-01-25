import "./src/css/main.css";
import React from "react";
import { SidebarProvider } from "./src/context/sidebar";
import RootLayout from "./src/components/RootLayout";

export const wrapRootElement = ({ element }) => {
  return (
    <RootLayout>
      <SidebarProvider>{element}</SidebarProvider>
    </RootLayout>
  );
};
