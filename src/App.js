import React from "react";
import AppLayout from "./layout/index";
import "../src/styles.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LayoutContextProvider } from "./context/LayoutContext";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <LayoutContextProvider>
            <ToastContainer />
            <AppLayout />
          </LayoutContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
