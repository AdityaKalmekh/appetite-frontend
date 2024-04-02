import { Box } from "@mui/material";
import {
  DRAWER_OPENED_WIDTH,
  DRAWER_CLOSED_WIDTH,
  FOOTER_HEIGHT,
} from "../constants";
import SupplierDashboard from "../components/supplier/SupplierDashBoard";
import { UseLayoutContext } from "../context";
import Content from "../layout/Content";

const AppLayout = () => {
  const { host } = window.location;
  const { isDrawerOpened } = UseLayoutContext();
console.log({host})
  return (
    <>
      {host === "localhost:3000" ? (
        <div>
          <Content />
        </div>
      ) : (
        <div>
          <SupplierDashboard />
          <Box
            sx={{
              ml: isDrawerOpened ? DRAWER_OPENED_WIDTH : DRAWER_CLOSED_WIDTH,
              mb: FOOTER_HEIGHT,
              paddingX: ".5rem",
              paddingTop: ".5rem",
            }}
          >
            <Content />
          </Box>
        </div>
      )}
    </>
  );
};

export default AppLayout;
