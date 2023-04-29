import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import UploadImage from "../../common/UploadImage";
import FormikController from "../../formik/FormikController";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";

const SupplierDetails = () => {
  const { sendRequest: sendTaskRequest } = useHttp();
  const [image, setImage] = useState();
  const [currentValues, setCurrentValues] = useState({
    closingTime: "",
    servicetitle: "",
    contact: "",
    openingTime: "",
    image: "",
    supplier_id: "",
    _id: "",
  });

  useEffect(() => {
    sendTaskRequest({ url: "/getSupplierDetails", method: "get" }, (data) =>
      setCurrentValues(
        (currentValues.servicetitle = data.servicetitle),
        (currentValues.closingTime = data.closingTime),
        (currentValues.contact = data.contact),
        (currentValues.openingTime = data.openingTime),
        (currentValues.image = data.image),
        (currentValues.supplier_id = data.supplier_id),
        (currentValues._id = data._id)
      )
    );
  }, [sendTaskRequest, currentValues]);

  console.log(currentValues);

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

  const addAcknowledgement = (acknowledgement) => {
    console.log(acknowledgement);
  };

  const updateAcknowledgement = (response) => {
    if (response) {
      toast.success("Updated Successfully");
    }
  };

  const onSubmit = (value) => {
    // if (value._id !== "") {
    //   sendTaskRequest(
    //     {
    //       url: "/updateSupplierDetails",
    //       method: "put",
    //       data: value,
    //     },
    //     updateAcknowledgement.bind(null)
    //   );
    // }
    console.log(value);
    sendTaskRequest(
      {
        url: "/addSupplierDetail",
        method: "post",
        data: { ...value, image },
      },
      addAcknowledgement.bind(null)
    );
  };

  const encodedImage = (value) => {
    setImage(value);
  };

  return (
    <Box sx={{ paddingX: "2rem", paddingTop: "2rem" }}>
      <Formik
        initialValues={currentValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: "2rem",
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h4">Account Service Details</Typography>
                </Grid>
                <Grid item xs={12} sx={{ paddingY: "1rem" }}>
                  <Divider sx={{ width: "100%", borderWidth: "600" }} />
                </Grid>
                <Grid container item spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Note: Mention time uptill when orders are taken
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
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
                      label="Enter Owner Number"
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
                      label="Opening Time"
                      name="openingTime"
                      fullWidth
                      value={formik.values.openingTime}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.timing && Boolean(formik.errors.timing)
                      }
                      helperText={formik.touched.timing && formik.errors.timing}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormikController
                      control="text"
                      type="text"
                      label="Closing Time"
                      name="closingTime"
                      fullWidth
                      value={formik.values.closingTime}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.timing && Boolean(formik.errors.timing)
                      }
                      helperText={formik.touched.timing && formik.errors.timing}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ color: "grey" }}>
                      <span>Uplod Image</span>
                    </Typography>
                    <UploadImage encodedImage={encodedImage} />
                  </Grid>
                  <Grid item xs={12} sx={{ paddingTop: "2rem" }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        backgroundColor: "#04D010",
                        color: "#063340",
                        "&:hover": {
                          backgroundColor: "#063340",
                          borderColor: "#063340",
                          color: "#04D010",
                          boxShadow: "none",
                        },
                        borderRadius: "0rem",
                        fontSize: "16px",
                      }}
                      onClick={() => {
                        onSubmit(formik.values);
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
    </Box>
  );
};

export default SupplierDetails;
