import { TextField } from "@mui/material";
import React from "react";

const CommonTextField = ({ label, name, props }) => {
  return (
    <>
      <TextField
        type={"text"}
        fullWidth
        label={label}
        name={name}
        {...props}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "0rem !important",
            height: "4rem",
            "&:hover fieldset": {
              borderColor: "#04D010",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#04D010",
            },
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "#04D010",
          },
        }}
      />
    </>
  );
};

export default CommonTextField;
