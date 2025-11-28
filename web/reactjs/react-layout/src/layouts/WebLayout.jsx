import React from "react";
import Navbar from "../components/website/Navbar.jsx";
import Footer from "../components/website/Footer.jsx";

const WebLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WebLayout;
