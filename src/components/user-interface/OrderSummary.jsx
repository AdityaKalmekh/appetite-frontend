import { Box, Button, Grid, imageListClasses, Typography,Input } from "@mui/material";
import { Form, Formik } from "formik";
import CommonContainer from "../../common/CommonContainer";
import FormikController from "../../formik/FormikController";
import { useState } from "react";
import useHttp from "../../hooks/useHttp";
import PaymentPage from "./PaymentPage";

const OrderSummary = ({total,checkoutHandler}) => {  
  const initialValues = {}
    const [payment,setPayment] = useState(false);

    const paymentHandler = () => {
      setPayment(true);
    }

    return (
        <CommonContainer sx={{ paddingX: "10rem" }}>
          {payment ? <PaymentPage orderDetails = {total} checkoutHandler={checkoutHandler}/> :
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            // onSubmit={onSubmit}
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
                      <Typography variant="h4">Order Summary</Typography>
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item xs={6}>
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
                        <Grid item xs={6}>
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
                        <Grid item xs={6}>
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
                    </Grid>
                    <Button onClick={paymentHandler} color="primary">Continue</Button>
                </Grid>
                </Box>
              </Form>
            )}
          </Formik>}
        </CommonContainer>
      );
}

export default OrderSummary