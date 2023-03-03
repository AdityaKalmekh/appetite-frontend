import React from "react";
import AppLayout from "./layout/index";
import "../src/styles.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
};

export default App;
