const React = require("react");
const { SidebarProvider } = require("./src/context/sidebar");

exports.wrapRootElement = ({ element }) => {
  return <SidebarProvider>{element}</SidebarProvider>;
};
