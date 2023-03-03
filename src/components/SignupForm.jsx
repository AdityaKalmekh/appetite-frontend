import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import { CardMedia, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import SignupFormOTP from "./SignupFormOTP";
import FormikController from "../formik/FormikController";

const SignupForm = () => {
  const [openSignupOtp, setOpenSignupOtp] = useState(false);
  const [value, setValue] = useState();
  const initialValues = {
    phonenumber: "",
    username: "",
    email: "",
  };
  const validationSchema = Yup.object({
    phonenumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        {
          message: "Please enter valid number.",
          excludeEmptyString: false,
        }
      )
      .required("Required"),
    username: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values, { resetForm }) => {
    console.log({ values });
    setValue(values);
    // if (values) {
    //   mobileOtp(values)
    //     .then(async (res) => {
    //       console.log({ res });
    //       if (res.data.message === undefined) {
    //         toast.error("Something went wrong");
    //       } else {
    //         toast.success(res.data.message);
    //       }
    //     })
    //     .catch((err) => {
    //       toast.error(err.message);
    //     });
    // }
    setOpenSignupOtp(true);
    resetForm();
  };

  return (
    <>
      {openSignupOtp === false ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <Grid container sx={{ display: "flex" }}>
                <Grid item xs={false} sm={4} md={7}>
                  <Box>
                    <CardMedia
                      component="img"
                      image="/images/lunch4.jpg"
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
                        <Link to={"/Login"} style={{ textDecoration: "none" }}>
                          <Typography
                            variant="h6"
                            sx={{ color: "#04D010", fontWeight: "700px" }}
                          >
                            Login to your account
                          </Typography>
                        </Link>
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
                      <FormikController
                        control="input"
                        type="number"
                        label="Phone Number"
                        name="phonenumber"
                        fullWidth
                        value={formik.values.phonenumber}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phonenumber &&
                          Boolean(formik.errors.phonenumber)
                        }
                        helperText={
                          formik.touched.phonenumber &&
                          formik.errors.phonenumber
                        }
                      />
                    </Grid>
                    <Grid component="form" item md={12}>
                      <FormikController
                        control="input"
                        type="text"
                        label="Namer"
                        name="username"
                        fullWidth
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.username &&
                          Boolean(formik.errors.username)
                        }
                        helperText={
                          formik.touched.username && formik.errors.username
                        }
                      />
                    </Grid>
                    <Grid component="form" item md={12}>
                      <FormikController
                        control="input"
                        type="text"
                        label="Email"
                        name="email"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
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
                        Continue
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
                          sx={{ color: "#04D010" }}
                          fontWeight="500px"
                        >
                          By creating an account, I accept the Terms &
                          Conditions & Privacy Policy
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      ) : (
        <SignupFormOTP phonenumber={value} />
      )}
    </>
  );
};

export default SignupForm;
