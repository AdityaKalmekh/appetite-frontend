import { TextField } from "@mui/material";
import React from "react";

const CommonTextField = ({ label, name, value, error, helperText, props }) => {
  return (
    <>
      <TextField
        fullWidth
        label={label}
        name={name}
        value={value}
        error={error}
        helperText={helperText}
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
