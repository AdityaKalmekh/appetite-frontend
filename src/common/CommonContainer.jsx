import { Box } from "@mui/material";
import React from "react";

const CommonContainer = ({ children, ...props }) => {
  return (
    <Box {...props} marginTop={{ xs: "4.8rem", md: "4.8rem" }}>
      {children}
    </Box>
  );
};

export default CommonContainer;
