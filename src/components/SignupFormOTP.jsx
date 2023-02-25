import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia, Divider } from "@mui/material";

const SignupFormOTP = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid container sx={{ display: "flex" }}>
      <Grid item xs={false} md={7}>
        <Box>
          <CardMedia
            component="img"
            image="/images/lunch5.jpg"
            alt="Paella dish"
            sx={{
              width: "60vw",
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>
      </Grid>
      <Grid container item xs={12} md={5} component={Paper}>
        <Grid container item md={12} sx={{ marginX: "4rem" }}>
          <Grid
            item
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              marginBottom: "1rem",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: ".5rem",
              }}
            >
              Sign up
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: ".5rem",
              }}
            >
              <Typography variant="h6" mr=".3rem">
                or
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#04D010", fontWeight: "700px" }}
              >
                Login to your account
              </Typography>
            </Box>
            <Divider />
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <CardMedia
              component="img"
              image="/images/lunch2.jpg"
              alt="Paella dish"
              sx={{
                width: "9rem",
                height: "9rem",
                borderRadius: "55%",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={12}
          sx={{ marginX: "4rem", marginTop: "1rem", marginBottom: "6rem" }}
        >
          <Grid item md={12}>
            <TextField
              disabled
              type="text"
              fullWidth
              id="mobile"
              label="Phone Number"
              name="mobile"
              autoFocus
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              type="text"
              fullWidth
              id="loginotp"
              label="One time password"
              name="loginotp"
              autoFocus
            />
          </Grid>
          <Grid item md={12}>
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#063340",
                "&:hover": {
                  backgroundColor: "#04D010",
                  color: "#fff",
                },
                fontSize: "20px",
              }}
            >
              VERYFY OTP
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignupFormOTP;
