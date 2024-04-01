import * as React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import { CardMedia, Divider } from "@mui/material";
import FormikController from "../../formik/FormikController";
import { Form, Formik } from "formik";
import useHttp from "../../hooks/useHttp";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupFormOTP = (values) => {
  const navigate = useNavigate();
  const [otpTimer, setOtpTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (otpTimer > 0) {
        setOtpTimer((seconds) => seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [otpTimer]);

  const { sendRequest } = useHttp();
  const initialValues = {
    signupotp: "",
  };

  setTimeout(function () {
    localStorage.removeItem("OTP");
  }, 60000);

  const addUserAcknowledgement = (id) => {
    console.log(id);
    if (id) {
      toast.success("Register Successfully");
      navigate("/Login");
    }
  };

  const validationSchema = Yup.object({
    signupotp: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(6, "Must be exactly 6 digits")
      .max(6, "Must be exactly 6 digits"),
  });

  const onSubmit = (value) => {
    if (value.signupotp === parseInt(localStorage.getItem("OTP"))) {
      sendRequest(
        {
          url: "/addUser",
          method: "post",
          data: values,
        },
        addUserAcknowledgement.bind(null)
      );
      localStorage.removeItem("OTP");
    } else if (localStorage.getItem("OTP") === null) {
      console.log("OTP expire");
    } else {
      console.log("Wrong OTP");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
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
                    Enter OTP
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginBottom: ".5rem",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "#04D010", fontWeight: "700px" }}
                    >
                      We've sent an OTP to your phone number.
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
                <Grid item md={12}>
                  <FormikController
                    control="input"
                    type="number"
                    label="Phone Number"
                    name="phonenumber"
                    fullWidth
                    disabled
                    value={values.values.phonenumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phonenumber &&
                      Boolean(formik.errors.phonenumber)
                    }
                    helperText={
                      formik.touched.phonenumber && formik.errors.phonenumber
                    }
                  />
                </Grid>
                <Grid item md={12}>
                  <FormikController
                    control="input"
                    type="number"
                    label="One time password"
                    name="signupotp"
                    fullWidth
                    value={formik.values.signupotp}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.signupotp &&
                      Boolean(formik.errors.signupotp)
                    }
                    helperText={
                      formik.touched.signupotp && formik.errors.signupotp
                    }
                  />
                </Grid>
                <Typography
                  variant="h6"
                  sx={{ color: "#729142", fontWeight: "700px" }}
                >{`${otpTimer}SEC`}</Typography>
                <Grid item md={12}>
                  <Button
                    type="submit"
                    fullWidth
                    size="large"
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
                    onClick={onSubmit}
                  >
                    VERYFY OTP
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormOTP;
