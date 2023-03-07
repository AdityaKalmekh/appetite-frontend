import * as React from "react";
import Box from "@mui/material/Box";
import { Chip, Divider, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DiscountIcon from "@mui/icons-material/Discount";
import CommonContainer from "../../common/CommonContainer";
import Header from "../../layout/Header";

const HomePage = () => {
  return (
    <CommonContainer>
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
                src="/images/ad-poster.jpg"
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
                src="/images/ad-poster.jpg"
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
                src="/images/ad-poster.jpg"
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
                src="/images/ad-poster.jpg"
                width="250"
                height="250"
              />
            </Grid>
          </Box>
        </Grid>
        <Grid container item xs={12}>
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
                  src="/images/ad-poster.jpg"
                  width="300"
                  height="200"
                />
              </Box>
              <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
                <Typography variant="h6">Service Provider</Typography>
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
            </Grid>
          </Grid>

          {/* --------------temp please delete me DikshantDon-------------------- */}
          <Grid container item md={4} xs={12} sx={{ padding: "2rem" }}>
            <Grid
              item
              sx={{
                boxShadow: "0px 0px 5px grey",
                minWidth: "300px",
                minHeight: "400px",
                objectFit: "cover",
              }}
            >
              <Box>
                <img
                  alt="icon"
                  src="/images/ad-poster.jpg"
                  width="300"
                  height="200"
                />
              </Box>
              <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
                <Typography variant="h6">Service Provider</Typography>
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

                <Typography>Flat off on orders above</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item md={4} xs={12} sx={{ padding: "2rem" }}>
            <Grid
              item
              sx={{
                boxShadow: "0px 0px 5px grey",
                minWidth: "300px",
                minHeight: "400px",
                objectFit: "cover",
              }}
            >
              <Box>
                <img
                  alt="icon"
                  src="/images/ad-poster.jpg"
                  width="300"
                  height="200"
                />
              </Box>
              <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
                <Typography variant="h6">Service Provider</Typography>
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

                <Typography>Flat off on orders above</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item md={4} xs={12} sx={{ padding: "2rem" }}>
            <Grid
              item
              sx={{
                boxShadow: "0px 0px 5px grey",
                minWidth: "300px",
                minHeight: "400px",
                objectFit: "cover",
              }}
            >
              <Box>
                <img
                  alt="icon"
                  src="/images/ad-poster.jpg"
                  width="300"
                  height="200"
                />
              </Box>
              <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
                <Typography variant="h6">Service Provider</Typography>
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

                <Typography>Flat off on orders above</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item md={4} xs={12} sx={{ padding: "2rem" }}>
            <Grid
              item
              sx={{
                boxShadow: "0px 0px 5px grey",
                minWidth: "300px",
                minHeight: "400px",
                objectFit: "cover",
              }}
            >
              <Box>
                <img
                  alt="icon"
                  src="/images/ad-poster.jpg"
                  width="300"
                  height="200"
                />
              </Box>
              <Grid item xs={12} sx={{ paddingLeft: ".5rem" }}>
                <Typography variant="h6">Service Provider</Typography>
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

                <Typography>Flat off on orders above</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CommonContainer>
  );
};

export default HomePage;
