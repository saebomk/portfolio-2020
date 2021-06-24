import React from "react";
import "./layout.css";
import { GlobalStyle } from "../styles/GlobalStyles";
import Footer from "../Footer"; 
import Header from "../Header"; 

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
