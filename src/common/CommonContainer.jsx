import { Box } from "@mui/material";
import React from "react";

const CommonContainer = ({ children, ...props }) => {
  return (
    <Box
      paddingX={{ xs: 1, sm: 10 }}
      {...props}
      marginTop={{ xs: "4rem", md: "4rem" }}
    >
      {children}
    </Box>
  );
};

export default CommonContainer;
