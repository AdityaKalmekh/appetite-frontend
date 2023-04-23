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
import OrderSummary from "../components/user-interface/OrderSummary";
import SupplierDashBoard from "../components/supplier/SupplierDashBoard";

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
      {/* <Route exact path="/Dashboard" element={<DashBoard />} /> */}
      <Route exact path="/HomePage" element={<HomePage />} />
      <Route exact path="/supplier-menu" element={<SupplierMenu />} />
      <Route exact path="/meale" element={<PickMeal />} />
      <Route exact path="/Order-Summary" element={<OrderSummary />} />
      <Route exact path="/LandingPage" element={<LanadingPage />} />
      <Route exact path="/supplier-dashpoard" element={<SupplierDashBoard />} />
      {/* <Route
        exact
        path="/ServiceProviderPage"
        element={<ServiceProviderPage />}
      /> */}
    </Routes>
  );
};

export default Content;
