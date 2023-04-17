import {
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useHttp from "../../hooks/useHttp";
import { useState } from "react";

const PickMeal = (supplierId) => {
  // console.log(supplierId);
  const [menu,setMenu] = useState([]);
  const {sendRequest} = useHttp();
  const [prices, setPrices] = useState(new Array(menu.length).fill(0));
  // const[price,setPrice] = useState([]);
  // let prices = [];

  useEffect(() => {
    sendRequest({url:`/getMenu/${supplierId.supplierId}`,method:"get"},(data) => {setMenu(data)})
  },[sendRequest,supplierId])

  return (
    <>
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", paddingTop: "2rem" }}
    >
      <Grid container item xs={9}>
        <Grid item xs={12} sx={{ paddingY: ".5rem" }}>
          <Typography variant="h4" sx={{ color: "#282c3f" }}>
            Pick Meal
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingY: ".5rem" }}>
          <Typography variant="body1" sx={{ color: "#a4a5ae" }}>
            India
          </Typography>
          <Typography variant="body1" sx={{ color: "#a4a5ae" }}>
            Setalite, 0.5 km
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ width: "80%" }} />
      <Grid container item xs={9} sx={{ display: "flex" }}>
        <Grid
          item
          xs={6}
          gap={1}
          sx={{ paddingY: ".5rem", display: "flex", alignItems: "center" }}
        >
          <AccessTimeIcon />
          <Typography>28 MINS</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            paddingY: ".5rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <FormControlLabel
            sx={{ marginLeft: "0rem" }}
            value="start"
            control={<Switch defaultChecked color="primary" />}
            label="Veg Only"
            labelPlacement="start"
          />
        </Grid>
      </Grid>
      <Divider sx={{ width: "80%" }} />
      <Grid container item xs={9}>
        <Grid item></Grid>
      </Grid>
      {menu.map((item,index) => {
        // const [prices, setPrices] = useState(new Array(menu.length).fill(0));
        return (
          <Grid container item md={9} xs={6} sx={{ padding: "2rem" }}>
            <Grid
              item
              sx={{
                boxShadow: "0px 0px 20px grey",
                minWidth: "300px",
                minHeight: "200px",
                objectFit: "cover",
              }}
            >
            <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
              {/* <Typography variant="h6">{supplier.servicetitle}</Typography> */}
            </Grid>
            <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
              <Typography variant="body2">Food Option : {item.foodoption}</Typography>
              <Typography variant="body2">Food Time : {item.foodtime}</Typography>
              <Typography variant="body2">Dish Contain : {item.tifindescription}</Typography>
              <Typography variant="body2">Total : {item.packagingcharge+item.tifinprice}</Typography>
            </Grid>
            <Button onClick={() => {
              const newPrices = [...prices];
              newPrices[index]++;
              setPrices(newPrices);
              // setPrices(prev => {
              //   const newPrices = [...prev];
              //   newPrices[index]++;
              //   return newPrices
              // })
              // const newPrices = [...prices];
              // newPrices[index]++;
              // setPrices(newPrices);
            }}>+{prices[index]}</Button>
            </Grid>
          </Grid>
    )})}
  </Grid>
  </>
  );
};

export default PickMeal;
