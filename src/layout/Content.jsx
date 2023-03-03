import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Header from "./Header";

const Content = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Box>Page Not Found</Box>
          </>
        }
      />
      <Route
        exact
        path="/"
        element={
          <>
            <Header />
          </>
        }
      />
      <Route exact path="/Signup" element={<SignupForm />} />
      <Route exact path="/Login" element={<LoginForm />} />
    </Routes>
  );
};

export default Content;
