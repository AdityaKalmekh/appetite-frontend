import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../components/user-interface/DashBoard";
import LoginForm from "../components/user-interface/LoginForm";
import SignupForm from "../components/user-interface/SignupForm";
import SupplierDashboard from "../components/supplier/SupplierDashboard";
import Header from "./Header";
import SupplierDetails from "../components/supplier/SupplierDetails";

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
            <DashBoard />
          </>
        }
      />
      <Route exact path="/Signup" element={<SignupForm />} />
      <Route exact path="/Login" element={<LoginForm />} />
      <Route exact path="/Header" element={<Header />} />
      <Route exact path="/Supplier-Dashboard" element={<SupplierDashboard />} />
      <Route exact path="/Supplier-Details" element={<SupplierDetails />} />
    </Routes>
  );
};

export default Content;
