
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";
import React from "react";

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header/>
      {children}
      <Home/>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
