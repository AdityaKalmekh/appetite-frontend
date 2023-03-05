import { Box, Button, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import CommonContainer from "../../common/CommonContainer";
import UploadImage from "../../common/UploadImage";
import FormikController from "../../formik/FormikController";

const SupplierDetails = () => {
  const FoodType = [
    {
      value: "Veg",
      label: "veg",
    },
    {
      value: "Non Veg",
      label: "Non veg",
    },
    {
      value: "Egg",
      label: "Egg",
    },
  ];
  const initialValues = {
    servicetitle: "",
    phonenumber: "",
    location: "",
    foodtype: "",
  };
  const validationSchema = Yup.object({
    servicetitle: Yup.string().required("Required"),
    contact: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        {
          message: "Please enter valid number.",
          excludeEmptyString: false,
        }
      )
      .required("Required"),
    location: Yup.string().required("Required"),
    foodtype: Yup.string().required("Required"),
  });

  const onSubmit = (e) => {
    console.log("hello");
    console.log(e);
  };

  return (
    <CommonContainer sx={{ paddingX: "5rem" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <Box
              sx={{
                border: "1px solid grey",
                padding: "2rem",
                borderRadius: "4px",
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h4">Supplier Detais</Typography>
                </Grid>
                <Grid container item spacing={1}>
                  <Grid item xs={12}>
                    <FormikController
                      control="text"
                      type="text"
                      label="Title of Service"
                      name="servicetitle"
                      fullWidth
                      value={formik.values.servicetitle}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.servicetitle &&
                        Boolean(formik.errors.servicetitle)
                      }
                      helperText={
                        formik.touched.servicetitle &&
                        formik.errors.servicetitle
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikController
                      control="text"
                      type="text"
                      label="contact No"
                      name="contact"
                      fullWidth
                      value={formik.values.contact}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.contact && Boolean(formik.errors.contact)
                      }
                      helperText={
                        formik.touched.contact && formik.errors.contact
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikController
                      control="text"
                      type="text"
                      label="Location"
                      name="location"
                      fullWidth
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.location &&
                        Boolean(formik.errors.location)
                      }
                      helperText={
                        formik.touched.location && formik.errors.location
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikController
                      control="select"
                      type="text"
                      label="Food Type"
                      name="foodtype"
                      fullWidth
                      options={FoodType}
                      value={formik.values.foodtype}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.foodtype &&
                        Boolean(formik.errors.foodtype)
                      }
                      helperText={
                        formik.touched.foodtype && formik.errors.foodtype
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikController
                      control="text"
                      type="text"
                      label="Timing"
                      name="timing"
                      fullWidth
                      value={formik.values.timing}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.timing && Boolean(formik.errors.timing)
                      }
                      helperText={formik.touched.timing && formik.errors.timing}
                    />
                    <Typography variant="subtitle2" color="red">
                      *Mention time uptill when orders are taken
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{ paddingBottom: ".5rem" }}
                    >
                      <span>Uplod Image</span>
                    </Typography>
                    <UploadImage />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      onClick={(e) => {
                        onSubmit(e);
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </CommonContainer>
  );
};

export default SupplierDetails;
