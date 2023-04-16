import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import { Box, Typography } from "@mui/material";

export default function SearchBox() {
  return (
    <Box
      component="form"
      sx={{
        border: "1px solid black",
        borderRightColor: "#04D010",
        display: "flex",
        alignItems: "center",
        marginTop: "2rem",
        height: { md: 60, xs: 600 },
        width: { md: 550, xs: "auto" },
      }}
    >
      <InputBase
        placeholder="Enter your delivery location"
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton type="button">
        <GpsFixedOutlinedIcon fontSize="small" sx={{ mr: ".5rem" }} />
        <Typography>Locate Me</Typography>
      </IconButton>
      <Box
        sx={{
          border: "1px solid #04D010",
          backgroundColor: "#04D010",
          height: 60,
          width: 110,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          FIND FOOD
        </Typography>
      </Box>
    </Box>
  );
}
