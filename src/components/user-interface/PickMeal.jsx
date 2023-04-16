import {
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const PickMeal = () => {
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
    >
      <Grid container item xs={9}>
        <Grid item xs={12} sx={{ paddingY: ".5rem" }}>
          <Typography variant="h4" sx={{ color: "#282c3f" }}>
            Pick Meal
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingY: ".5rem" }}>
          <Typography variant="body1" sx={{ color: "#a4a5ae" }}>
            India
          </Typography>
          <Typography variant="body1" sx={{ color: "#a4a5ae" }}>
            Setalite, 0.5 km
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "80%" }} />
      <Grid container item xs={9} sx={{ display: "flex" }}>
        <Grid
          item
          xs={6}
          gap={1}
          sx={{ paddingY: ".5rem", display: "flex", alignItems: "center" }}
        >
          <AccessTimeIcon />
          <Typography>28 MINS</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            paddingY: ".5rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FormControlLabel
            sx={{ marginLeft: "0rem" }}
            value="start"
            control={<Switch defaultChecked color="primary" />}
            label="Veg Only"
            labelPlacement="start"
          />
        </Grid>
      </Grid>
      <Divider sx={{ width: "80%" }} />
      <Grid container item xs={9}>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default PickMeal;
