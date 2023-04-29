import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import FormikController from "../../formik/FormikController";
import { useState } from "react";
import PaymentPage from "./PaymentPage";

const OrderSummary = ({ total, checkoutHandler }) => {
  const initialValues = {};
  const [payment, setPayment] = useState(false);

  const paymentHandler = () => {
    setPayment(true);
  };

  return (
    <>
      {payment ? (
        <PaymentPage orderDetails={total} checkoutHandler={checkoutHandler} />
      ) : (
        <Box sx={{ paddingX: "10rem" }}>
          <Formik initialValues={initialValues}>
            {(formik) => (
              <Form>
                <Box
                  sx={{
                    border: "1px solid lightgrey",
                    padding: "1rem",
                    pb: "0rem",
                    marginBottom: "1rem",
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
                        border: "1px solid lightgrey",
                        backgroundColor: "#04D010",
                      }}
                    >
                      <Typography variant="h4">Order Summary</Typography>
                    </Grid>
                    <Divider sx={{ marginY: "1rem", width: "100%" }} />
                    <Grid container item>
                      <Grid item xs={6}>
                        <Box sx={{ height: "60vh" }}>
                          <CardMedia
                            component="img"
                            image="/images/summary.jpg"
                            alt="Paella dish"
                            sx={{
                              height: "100%",
                            }}
                          />
                        </Box>
                      </Grid>
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                        item
                        xs={6}
                      >
                        <Grid item xs={12}>
                          <FormikController
                            control="text"
                            type="text"
                            disabled
                            label="Quantity"
                            name="foodtype"
                            fullWidth
                            value={total.quantity}
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
                        <Grid item xs={12}>
                          <FormikController
                            control="text"
                            type="text"
                            disabled
                            label="Price"
                            name="address"
                            fullWidth
                            value={total.tiffinCharges}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.contact &&
                              Boolean(formik.errors.contact)
                            }
                            helperText={
                              formik.touched.contact && formik.errors.contact
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormikController
                            control="text"
                            type="text"
                            label="Packaging Charge"
                            name="area"
                            disabled
                            fullWidth
                            value={total.packagingCharges}
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
                        <Grid item xs={12}>
                          <FormikController
                            control="text"
                            type="text"
                            disabled
                            label="Total Amount"
                            name="area"
                            fullWidth
                            value={total.total}
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
                        <Grid item xs={12}>
                          <Button
                            onClick={paymentHandler}
                            variant="contained"
                            fullWidth
                            sx={{
                              borderRadius: "0rem",
                              backgroundColor: "#04D010",
                              "&:hover": {
                                backgroundColor: "#04D010",
                                color: "#063340",
                              },
                            }}
                          >
                            Continue
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </>
  );
};

export default OrderSummary;
