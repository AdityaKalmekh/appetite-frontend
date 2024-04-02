import {
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  Box,
  IconButton,
  Button,
  CardMedia,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useHttp from "../../hooks/useHttp";
import OrderSummary from "./OrderSummary";

const PickMeal = ({ supplierId }) => {
  const [cartBilling, setCartBilling] = useState({
    total: 0,
    tiffinCharges: 0,
    packagingCharges: 0,
    quantity: 0,
    supplierId: null,
    userId: null,
    menuList : {}
  });
  const { sendRequest } = useHttp();
  const [menu, setMenu] = useState([]);
  const [orderHandler, setOrderHandler] = useState(false);

  useEffect(() => {
    sendRequest({ url: `/getMenu/${supplierId}`, method: "get" }, (data) =>
      setMenu(data)
    );
  }, [sendRequest, supplierId]);

  const [cart, setCart] = useState({});

  const handleAddToCart = (productId, quantity) => {
    if (cart.hasOwnProperty(productId)) {
      setCart({ ...cart, [productId]: cart[productId] + 1 });
    } else {
      setCart({ ...cart, [productId]: quantity });
    }
  };
  console.log(cart);
  const handleRemoveToCart = (productId, quantity, price) => {
    if (cart.hasOwnProperty(productId) && cart[productId] > 0) {
      setCart({ ...cart, [productId]: cart[productId] - 1 });
    }
  };

  const checkoutHandler = () => {
    let total = 0;
    let tiffinCharge = 0;
    let packagingcharge = 0;
    let quantity = 0;
    menu.forEach((i) => {
      total += (i.packagingcharge + i.tifinprice) * cart[i._id];
      tiffinCharge += i.tifinprice * cart[i._id];
      packagingcharge += i.packagingcharge * cart[i._id];
      quantity += cart[i._id];
    });
    setCartBilling({
      total: total,
      tiffinCharges: tiffinCharge,
      packagingCharges: packagingcharge,
      quantity: quantity,
      supplierId,
      userId: localStorage.getItem("id"),
      menuList:cart
    });
    setOrderHandler(true);
  };

  console.log(cart);
  return (
    <>
      {orderHandler ? (
        <OrderSummary total={cartBilling} />
      ) : (
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
                control={
                  <Switch
                    defaultChecked
                    color="primary"
                    sx={{ color: "#04D010 !important" }}
                  />
                }
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
                console.log({ d });
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
                        <Typography variant="h6">
                          {d.foodoption}/{d.foodtime}
                        </Typography>
                        <Typography variant="subtitle1">
                          ₹ {d.packagingcharge + d.tifinprice}
                        </Typography>
                        <Typography variant="subtitle1">
                          {d.tifindescription}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginRight: "0rem",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image="/images/lunch2.jpg"
                            alt="Paella dish"
                            sx={{
                              width: "9rem",
                              height: "9rem",
                            }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginRight: "2rem",
                          }}
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
                              mt: ".5rem",
                            }}
                          >
                            <IconButton
                              color="primary"
                              component="label"
                              onClick={() => handleRemoveToCart(d._id, 1)}
                            >
                              <RemoveIcon sx={{ color: "#04D010" }} />
                            </IconButton>

                            <Typography variant="body1">
                              {cart[d._id]}
                            </Typography>

                            <IconButton
                              color="primary"
                              onClick={() => handleAddToCart(d._id, 1)}
                            >
                              <AddIcon sx={{ color: "#04D010" }} />
                            </IconButton>
                          </Box>
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
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid container item xs={12}>
                <Button
                  onClick={checkoutHandler}
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius: "0rem",
                    backgroundColor: "#04D010",
                    "&:hover": {
                      backgroundColor: "#04D010",
                      color: "#063340",
                    },
                  }}
                >
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default PickMeal;
