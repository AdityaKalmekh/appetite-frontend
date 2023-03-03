import { FormControl, FormHelperText, TextField } from "@mui/material";

function Input(props) {
  const { name, label, helperText, ...rest } = props;
  return (
    <FormControl sx={{ minWidth: "100%" }}>
      <TextField
        id={name}
        name={name}
        label={label}
        {...rest}
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
      <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>
    </FormControl>
  );
}
export default Input;
