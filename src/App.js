import React from "react";
import AppLayout from "./layout/index";
import "../src/styles.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <AppLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
