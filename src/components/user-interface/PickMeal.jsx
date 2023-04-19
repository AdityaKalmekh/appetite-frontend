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
  let temp = {};
  data.forEach((i) => (temp[i.item] = 0));
  const [cart, setCart] = useState(temp);
  const { sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(
      { url: `/getMenu/${supplierId.supplierId}`, method: "get" },
      (data) => {
        console.log({ data });
      }
    );
  }, [sendRequest, supplierId]);

  const handleAddToCart = (productId, quantity) => {
    if (cart.hasOwnProperty(productId)) {
      setCart({ ...cart, [productId]: cart[productId] + 1 });
    } else {
      setCart({ ...cart, [productId]: quantity });
    }
  };
  const handleRemoveToCart = (productId, quantity) => {
    if (cart.hasOwnProperty(productId)) {
      setCart({ ...cart, [productId]: cart[productId] - 1 });
    } else {
      setCart({ ...cart, [productId]: quantity });
    }
  };
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
          <Grid item xs={12} sx={{ paddingTop: ".5rem" }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Fixed Meals (6)
            </Typography>
            {data.map((d, index) => {
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
                      <Typography variant="h6">{d.item}</Typography>
                      <Typography variant="subtitle1">₹ 2{index}</Typography>
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
                          onClick={() => handleRemoveToCart(d.item, d.id)}
                        >
                          <RemoveIcon />
                        </IconButton>

                        <Typography variant="body1">{cart[d.item]}</Typography>

                        <IconButton
                          color="primary"
                          onClick={() => handleAddToCart(d.item, d.id)}
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
              <Button fullWidth variant="contained">
                Checkout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PickMeal;
