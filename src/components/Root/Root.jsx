import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../pages/Home";

const Root = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-306px)]">
        <Home></Home>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
