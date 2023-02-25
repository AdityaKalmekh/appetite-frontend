import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia, Divider } from "@mui/material";
import LoginFormOTP from "./LoginFormOTP";
import CommonTextField from "../common/CommonTextField";

const LoginForm = () => {
  const [openLoginOtp, setOpenLoginOtp] = useState(false);

  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <Grid item xs={false} sm={4} md={7}>
          <Box>
            <CardMedia
              component="img"
              image="/images/lunch1.jpg"
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
          <Grid
            container
            item
            md={12}
            sx={{ margin: "4rem", marginBottom: "0rem", paddingTop: "4rem" }}
          >
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
                Login
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
                  create an account
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
            sx={{ margin: "4rem", marginTop: "1rem" }}
          >
            <Grid component="form" item md={12}>
              <CommonTextField label={"Phone Number"} name={"phonenumber"} />
            </Grid>
            <Grid item md={12}>
              <Button
                type="submit"
                fullWidth
                size="large"
                onClick={() => {
                  setOpenLoginOtp(true);
                }}
                variant="contained"
                sx={{
                  "&.MuiButton-root": {
                    borderRadius: "0rem !important",
                    height: "3.5rem",
                  },
                  backgroundColor: "#063340",
                  "&:hover": {
                    backgroundColor: "#04D010",
                    color: "#063340",
                  },
                }}
              >
                Login
              </Button>
              <Grid
                item
                md={12}
                gap={1}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  mt: "1rem",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#729142" }}
                  fontWeight="500px"
                >
                  By clicking on Login, I accept the Terms & Conditions &
                  Privacy Policy
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {openLoginOtp && <LoginFormOTP />}
    </>
  );
};

export default LoginForm;
