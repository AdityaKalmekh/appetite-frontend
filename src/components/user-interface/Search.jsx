import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import { Box, Button, Typography } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";

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
      <Box sx={{ ml: 1, flex: 1 }}>
        <Autocomplete>
          <InputBase placeholder="Enter your delivery location" />
        </Autocomplete>
      </Box>
      <IconButton type="button">
        <GpsFixedOutlinedIcon fontSize="small" sx={{ mr: ".5rem" }} />
        <Typography>Locate Me</Typography>
      </IconButton>
      <Box
        sx={{
          // backgroundColor: "#04D010",
          height: 60,
          width: 110,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          fullWidth
          variant="outlined"
          // onClick={() => {
          //   onSubmit(formik.values);
          // }}
          sx={{
            height: 60,
            backgroundColor: "#04D010",
            color: "#063340",
            "&:hover": {
              backgroundColor: "#063340",
              color: "#04D010",
              boxShadow: "none",
            },
            borderRadius: "0rem",
            fontSize: "16px",
          }}
        >
          Submit
        </Button>
        {/* <Typography variant="body2" sx={{ fontWeight: 700 }}>
          FIND FOOD
        </Typography> */}
      </Box>
    </Box>
  );
}
