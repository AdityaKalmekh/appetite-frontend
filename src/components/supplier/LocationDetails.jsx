import { Box, Button, Grid, imageListClasses, Typography,Input } from "@mui/material";
import { Form, Formik } from "formik";
import CommonContainer from "../../common/CommonContainer";
import FormikController from "../../formik/FormikController";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import {Autocomplete} from '@react-google-maps/api';
import { CurrencyRuble } from "@mui/icons-material";

const LocationDetails = () => {
    const {sendRequest} = useHttp();
    const initialValues = {
        blockNo : "",
        streetName : "",
        area : "",
        city : "",
        state : "",
        pincode : "",
        location : [],
    }
    const [currentValues,setCurrentValues] = useState({
        blockNo : "",
        streetName : "",
        area : "",
        city : "",
        state : "",
        pincode : "",
        location : [],
    })

    useEffect(() =>{
        sendRequest({url : "/getLocation/640de28bb230f3f9cdcaacd0",method:"get"},(data) => (setCurrentValues(currentValues.city = data.city,
                                                                                                            currentValues.state = data.state,
                                                                                                            currentValues.streetName = data.streetName,
                                                                                                            currentValues.blockNo = data.blockNo,
                                                                                                            currentValues.pincode = data.pincode,
                                                                                                            currentValues.area = data.area)));
    },[sendRequest,currentValues])

    var geoCoder = new window.google.maps.Geocoder()

    const onSubmit = (values) => {
        console.log(values.location);
        var address = `${values.blockNo} ${values.streetName} ${values.area} ${values.city} ${values.state}`;      
        console.log(address.length);
        let location = []
        if (address !== " "){
            geoCoder.geocode({address:address}, function(result,status) {
                if (status === window.google.maps.GeocoderStatus.OK){
                    var latLng = result[0].geometry.location;
                    location.push(latLng.lng());
                    location.push(latLng.lat());
                    callback(location);
                }else{
                    console.log("Geocode was not successful for the following reason: " + status);
                    return;
                }
            })
        }else{
            console.log("hi");
        }
        function callback (location){
            sendRequest({url : "/addLocation",
                        method : "post",
                        data : {...values,location}})
        }
    }


    return (
        <CommonContainer sx={{ paddingX: "5rem" }}>
          <Formik
            
            initialValues={currentValues}
            // validationSchema={validationSchema}
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
                      <Typography variant="h4">Location Details</Typography>
                    </Grid>
                    <Grid container item spacing={1}>
                      <Grid item xs={6}>
                            <FormikController
                                control="text"
                                type="text"
                                label="Building/House No"
                                name="blockNo"
                                fullWidth
                                value={formik.values.blockNo}
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
                            label="Street Address"
                            name="streetName"
                            fullWidth
                            value={formik.values.streetName}
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
                            label="Area"
                            name="area"
                            fullWidth
                            value={formik.values.area}
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
                            label="City"
                            name="city"
                            fullWidth
                            value={formik.values.city}
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
                            label="State"
                            name="state"
                            fullWidth
                            value={formik.values.state}
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
                                type="number"
                                label="Pincode"
                                name="pincode"
                                fullWidth
                                value={formik.values.pincode}
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
                            <Autocomplete
                                freeSolo
                                disableClearable
                                options={[]}
                                getOptionLabel={(option) => option.description}
                                onPlaceSelected={(place)=> {console.log(place.formatted_address);}}
                            >
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
                            </Autocomplete>   
                        </Grid> 
                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                onClick={() => {onSubmit(formik.values)}}
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
}

export default LocationDetails