import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Chip, Divider, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DiscountIcon from "@mui/icons-material/Discount";
import CommonContainer from "../../common/CommonContainer";
import Header from "../../layout/Header";
import useHttp from "../../hooks/useHttp";
import { useEffect,useState } from "react";
import PickMeal from "./PickMeal";

const HomePage = () => {

  const {error,sendRequest:fetchTask}= useHttp()
  const [suppliers,setSuppliers] = useState([]);
  const [menu,setMenu] = useState(true)
  const[supplierId,setSupplierId] = useState(null);
  let supplier_id;

  const loadData = (data) => {
    setSuppliers(data)
  }

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        position => {
          fetchTask({url:`/getByCurrentLocation/${position.coords.longitude}/${position.coords.latitude}`,
                    method:"get"},(data) => setSuppliers(data))
        },
        error => {
          console.error(error);
        }
      );
    }else{
      console.error('Geolocation is not supported by this browser.');
    }
  },[fetchTask])
  
  if (suppliers.length <= 0){
    console.log("hi");
    fetchTask({url:"/getSupplierDetails",method:"get"},loadData);
  }  
  
  return (
    <CommonContainer>
      {menu ? 
      <Grid container>
        <Header />
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Box
            sx={{
              minHeight: "50vh",
              paddingX: "4rem",
              minWidth: "100vw",
              backgroundColor: "#063340",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon"
                src="/images/add1.jpg"
                width="250"
                height="250"
                style={{
                  "&:hover": {
                    transform: "scale(1)",
                  },
                  transition: " transform .2s",
                }}
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon"
                src="/images/add1.jpg"
                width="250"
                height="250"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon"
                src="/images/add1.jpg"
                width="250"
                height="250"
              />
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon"
                src="/images/add1.jpg"
                width="250"
                height="250"
              />
            </Grid>
          </Box>
        </Grid>
        <Grid container item xs={12}>
          {suppliers.map(supplier => {
          return (
          <>
          {/* {setSupplierId(supplier.supplier_id)} */}
          {/* {setSupplierId(suppliers.supplier_id)} */}
          <Grid container item md={4} xs={12} sx={{ padding: "2rem" }}>
            <Grid
              item
              sx={{
                boxShadow: "0px 0px 20px grey",
                minWidth: "300px",
                minHeight: "400px",
                objectFit: "cover",
              }}
            >
              <Box>
                <img
                  alt="icon"
                  src={supplier.image}
                  width="300"
                  height="200"
                />
              </Box>
              <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
                <Typography variant="h6">{supplier.servicetitle}</Typography>
              </Grid>
              <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
                <Typography variant="body2">Food Type</Typography>
              </Grid>
              <Grid container item xs={12}>
                <Grid
                  item
                  md={3}
                  xs={4}
                  sx={{ paddingTop: "1rem", paddingLeft: ".5rem" }}
                >
                  <Chip
                    color="success"
                    label="5.0"
                    icon={<StarIcon fontSize="small" />}
                    sx={{ fontWeight: "600", letterSpacing: "1px" }}
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={4}
                  sx={{
                    paddingTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                <Typography sx={{ fontSize: "14px" }}>35 MINS</Typography>
                </Grid>
                <Grid
                  item
                  md={5}
                  xs={4}
                  sx={{
                    paddingTop: "1rem",
                    paddingLeft: ".5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    *199 FOR TWO
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ width: "auto", paddingY: ".5rem" }} />
              <Grid
                item
                md={12}
                xs={12}
                sx={{ display: "flex", alignItems: "center", padding: "1rem" }}
              >
                <DiscountIcon sx={{ marginRight: ".5rem" }} />

                <Typography sx={{ color: "#04D010" }}>
                  Flat off on orders above
                </Typography>
              </Grid>
              <Grid item xs={12}>
              <Button fullWidth sx={{borderRadius:'0rem',backgroundColor:'#04D010', "&:hover": {
                        backgroundColor: "#04D010",
                        color: "#063340",
                      } }} variant="contained" onClick={() => {setMenu(false);setSupplierId(supplier.supplier_id)}}>Order</Button>

              </Grid>
            </Grid>
          </Grid>
          </>
          )})}
        </Grid>
      </Grid>: <PickMeal supplierId={supplierId}/>}
    </CommonContainer>
  );
};

export default HomePage;
