import React from "react";
import Sidebar from "../components/admin/Sidebar";
import Footer from "../components/website/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default AdminLayout;
