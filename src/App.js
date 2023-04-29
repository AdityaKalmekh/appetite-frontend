import React from "react";
import AppLayout from "./layout/index";
import "../src/styles.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LayoutContextProvider } from "./context/LayoutContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <LayoutContextProvider>
          <ToastContainer />
          <AppLayout />
        </LayoutContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
