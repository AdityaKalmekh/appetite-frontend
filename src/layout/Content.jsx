import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import LoginForm from "../components/user-interface/LoginForm";
import SignupForm from "../components/user-interface/SignupForm";
import SupplierDetails from "../components/supplier/SupplierDetails";
import Header from "./Header";
import HomePage from "../components/user-interface/HomePage";
import LocationDetails from "../components/supplier/LocationDetails";
import PaymentPage from "../components/user-interface/PaymentPage";
import PaymentSuccess from "../components/user-interface/PaymentSuccess";
import SupplierMenu from "../components/supplier/SupplierMenu";
import LanadingPage from "../components/user-interface/LandingPage";
import PickMeal from "../components/user-interface/PickMeal";


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
            <LanadingPage />
          </>
        }
      />
      <Route exact path="/Signup" element={<SignupForm />} />
      <Route exact path="/Login" element={<LoginForm />} />
      <Route exact path="/HomePage" element={<HomePage />} />
      <Route exact path="/Header" element={<Header />} />
      <Route exact path="/Supplier-Details" element={<SupplierDetails />} />
      <Route exact path="/Location-Details" element={<LocationDetails />} />
      <Route exact path="/payment" element={<PaymentPage />} />
      <Route exact path="/paymentSuccess" element={<PaymentSuccess />} />
      <Route exact path="/supplier-menu" element={<SupplierMenu />} />
      <Route exact path="/meal" element={<PickMeal />} />
    </Routes>
  );
};

export default Content;
