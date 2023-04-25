import { Grid, InputAdornment } from "@mui/material";
import Modal from "../../common/Modal";
import FormikController from "../../formik/FormikController";
import { useEffect, useRef, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useHttp from "../../hooks/useHttp";
import { toast } from "react-toastify";

const AddItem = ({ handleClose, currentRow, afterEdition, afterNewMenu }) => {
  const {sendRequest} = useHttp();
  const validationSchema = Yup.object({
    foodoption: Yup.string().required("Required"),
  });
  const formikRef = useRef();
  const options = [
    {
      value: "gujarati",
      label: "Gujarati",
    },
    {
      value: "punjabi",
      label: "Panjabi",
    },
  ];
  const foodTime = [
    {
      value: "breakfast",
      label: "BreakFast",
    },
    {
      value: "lunch",
      label: "Lunch",
    },
    {
      value: "dinner",
      label: "Dinner",
    },
  ];
  const foodTypes = [
    {
      value: "veg",
      label: "Veg",
    },
    {
      value: "nonveg",
      label: "Non-veg",
    },
    {
      value: "egg",
      label: "Egg",
    },
  ];

  const addDataResponse = (values,id) => {
    if (id){
      toast("Added Successfully");
      afterNewMenu({...values,_id:id})
    }
  }

  const editDataResponse = (values,acknowledgement) => {
    if (acknowledgement){
      toast("Updated Successfully");
      afterEdition(values);
    }
  }

  const onSubmit = () => {
    // console.log("hii");
    formikRef.current.submitForm().then((values) => {
      if (values) {
        if (currentRow._id){
          console.log("in edit");
          sendRequest({
            url : "/editMenu",
            method : 'put',
            data : values
          },editDataResponse.bind(null,values))
        }else{
          sendRequest({
            url : "/addMenu",
            method : 'post',
            data : values
          },addDataResponse.bind(null,values))
      }
    }
    handleClose(false);
    });
  };

  // console.log(menu);
  return (
    <Modal
      title="Menu Details"
      onOk={onSubmit}
      onCancel={handleClose}
      sx={{ minHeight: "500px" }}
    >
      <Grid
        sx={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}
      >
        <Formik
          innerRef={formikRef}
          initialValues={currentRow}
          validationSchema={validationSchema}
          onSubmit={(values)=>values}
        >
          {(formik) => (
            <Form>
              <Grid
                container
                sx={{
                  width: { md: "500px" },
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    border: "1px solid lightgrey",
                    boxShadow: "5px 5px lightgrey",
                    borderRadius: "4px",
                    padding: "1rem",
                  }}
                >
                  <FormikController
                    control="radio"
                    label="Veg/Non-veg"
                    options={foodTypes}
                    name="foodtypes"
                    fullWidth
                    value={formik.values.foodtypes}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.foodtypes &&
                      Boolean(formik.errors.foodtypes)
                    }
                    helperText={
                      formik.touched.foodtypes && formik.errors.foodtypes
                    }
                  />
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    container
                    item
                    xs={12}
                    spacing={3}
                    sx={{ paddingTop: "1rem" }}
                  >
                    <Grid component="form" item md={12}>
                      <FormikController
                        control="select"
                        type="select"
                        label="Select Food"
                        options={options}
                        name="foodoption"
                        fullWidth
                        value={formik.values.foodoption}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.foodoption &&
                          Boolean(formik.errors.foodoption)
                        }
                        helperText={
                          formik.touched.foodoption && formik.errors.foodoption
                        }
                      />
                    </Grid>
                    <Grid component="form" item md={12}>
                      <FormikController
                        control="text"
                        type="number"
                        label="Tifin Price"
                        name="tifinprice"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">₹</InputAdornment>
                          ),
                        }}
                        value={formik.values.tifinprice}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.tifinprice &&
                          Boolean(formik.errors.tifinprice)
                        }
                        helperText={
                          formik.touched.tifinprice && formik.errors.tifinprice
                        }
                      />
                    </Grid>
                    <Grid component="form" item md={12}>
                      <FormikController
                        control="text"
                        type="number"
                        label="Packaging Charge"
                        name="packagingcharge"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">₹</InputAdornment>
                          ),
                        }}
                        value={formik.values.packagingcharge}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.packagingcharge &&
                          Boolean(formik.errors.packagingcharge)
                        }
                        helperText={
                          formik.touched.packagingcharge &&
                          formik.errors.packagingcharge
                        }
                      />
                    </Grid>
                    <Grid component="form" item md={12}>
                      <FormikController
                        control="select"
                        type="select"
                        label="Select Food Time"
                        options={foodTime}
                        name="foodtime"
                        fullWidth
                        value={formik.values.foodtime}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.foodtime &&
                          Boolean(formik.errors.foodtime)
                        }
                        helperText={
                          formik.touched.foodtime && formik.errors.foodtime
                        }
                      />
                    </Grid>
                    <Grid component="form" item md={12}>
                      <FormikController
                        control="text"
                        type="number"
                        label="Tifin Description"
                        name="tifindescription"
                        multiline
                        rows={4}
                        fullWidth
                        value={formik.values.tifindescription}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.tifindescription &&
                          Boolean(formik.errors.tifindescription)
                        }
                        helperText={
                          formik.touched.tifindescription &&
                          formik.errors.tifindescription
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Modal>
  );
};
export default AddItem;
