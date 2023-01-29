import React from "react";
import { Helmet } from "react-helmet";

export default function RootLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap"
        />
      </Helmet>
      {children}
    </>
  );
}
