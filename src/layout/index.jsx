import { Box } from "@mui/material";
import {
  DRAWER_OPENED_WIDTH,
  DRAWER_CLOSED_WIDTH,
  TOP_BAR_HEIGHT,
  FOOTER_HEIGHT,
} from "../constants";
import SupplierDashboard from "../components/supplier/SupplierDashBoard";
import { UseLayoutContext } from "../context";
import Content from "../layout/Content";

const AppLayout = () => {
  const { isDrawerOpened } = UseLayoutContext();
  return (
    <>
      <SupplierDashboard />
      <Box
        sx={{
          ml: isDrawerOpened ? DRAWER_OPENED_WIDTH : DRAWER_CLOSED_WIDTH,
          mt: TOP_BAR_HEIGHT,
          mb: FOOTER_HEIGHT,
          p: 1,
        }}
      >
        <Content />
      </Box>
    </>
  );
};

export default AppLayout;
