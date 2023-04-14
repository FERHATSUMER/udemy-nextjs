
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header/>
      {children}
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
