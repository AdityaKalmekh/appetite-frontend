import {
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useHttp from "../../hooks/useHttp";
import OrderSummary from "./OrderSummary";

const PickMeal = (supplierId) => {
  const data = [
    {
      item: "SmallMeal/Thali",
      id: 1,
    },
    {
      item: "MediumMeal/Thali",
      id: 2,
    },
    {
      item: "LargeMeal/Thali",
      id: 3,
    },
  ];
  const [cartBilling ,setCartBilling] = useState() ;
  const { sendRequest } = useHttp();
  const [menu,setMenu] = useState([]);
  // const [total,setTotal] = useState(0);
  const [orderHandler,setOrderHandler] = useState(false);
  // const [cart, setCart] = useState({});

  useEffect(() => {
    sendRequest(
      { url: `/getMenu/${supplierId.supplierId}`, method: "get" },
      (data) => setMenu(data)
    );
  }, [sendRequest, supplierId]);

  // menu.forEach((i) => (temp[i._id] = 0));
  // setCart({...cart,temp});
  // setCart(temp);
  // console.log(temp);
  const [cart, setCart] = useState({});
  console.log(cart);

  // console.log(total);
  const handleAddToCart = (productId, quantity) => {
    if (cart.hasOwnProperty(productId)) {
      setCart({ ...cart, [productId]: cart[productId] + 1 });
    } else {
      setCart({ ...cart, [productId]: quantity });
    }
  };
  
  const handleRemoveToCart = (productId, quantity,price) => {
    if (cart.hasOwnProperty(productId) && cart[productId] > 0) {
      setCart({ ...cart, [productId]: cart[productId] - 1 });
    }
  };

  const checkoutHandler = () => {
    let total = 0;
    let tiffinCharge = 0;
    let packagingcharge = 0;
    let quantity = 0;
    menu.forEach((i) => {total += (i.packagingcharge+i.tifinprice) * cart[i._id];
                        tiffinCharge += (i.tifinprice) * cart[i._id];
                        packagingcharge += (i.packagingcharge) * cart[i._id];
                        quantity += cart[i._id]});
    setCartBilling({total:total,tiffinCharges:tiffinCharge,packagingCharges:packagingcharge,quantity:quantity})
    setOrderHandler(true);
  }
  console.log(cartBilling);

  return (
    <>
    {orderHandler ?
        <OrderSummary 
          total={cartBilling}
        />:
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
          <Grid item xs={12} sx={{ paddingTop: ".5rem" }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Fixed Meals (6)
            </Typography>
            {menu.map((d, index) => {
              return (
                <>
                  <Grid
                    container
                    key={index}
                    item
                    xs={12}
                    sx={{ paddingY: "1rem" }}
                  >
                    <Grid item xs={6}>
                      <Typography variant="h6">{d.foodoption}/{d.foodtime}</Typography>
                      <Typography variant="subtitle1">₹ {d.packagingcharge + d.tifinprice}</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <Box
                        sx={{
                          border: "1px solid lightgrey",
                          borderRadius: "4px",
                          display: "flex",
                          maxHeight: "2rem",
                          maxWidth: "7rem",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <IconButton
                          color="primary"
                          component="label"
                          onClick={() => handleRemoveToCart(d._id, 1)}
                        >
                          <RemoveIcon />
                        </IconButton>

                        <Typography variant="body1">{cart[d._id]}</Typography>

                        <IconButton
                          color="primary"
                          onClick={() => handleAddToCart(d._id, 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider sx={{ width: "100%" }} />
                </>
              );
            })}
          </Grid>
          <Grid
            container
            item
            xs={10}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item xs={12}>
              <Button onClick={checkoutHandler} fullWidth variant="contained">
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      }
    </>
  );
};

export default PickMeal;
