import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function SelectComponent(props) {
  const { label, name, options, helperText, ...rest } = props;
  return (
    <FormControl sx={{ minWidth: "100%", ...rest.sx }}>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id={name}
        name={name}
        label={label}
        {...rest}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>
    </FormControl>
  );
}

export default SelectComponent;
