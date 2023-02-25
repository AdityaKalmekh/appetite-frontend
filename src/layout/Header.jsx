import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SearchBox from "../components/search";

const Header = () => {
  return (
    <>
      <Grid container>
        <Grid item md={6.5} xs={12}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#f5f5f5",
              height: { md: "85vh", xs: "70vh" },
            }}
          >
            <Toolbar>
              <Grid container>
                <Grid container item md={12}>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <img
                      alt="icon"
                      src="/images/icon1.png"
                      width="60"
                      height="60"
                    />
                    <Typography
                      variant="h3"
                      fontFamily="Monospace"
                      textTransform="uppercase"
                      letterSpacing="1px"
                      color="#04D010"
                      sx={{ marginX: "1rem" }}
                    >
                      AppElite
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { md: "flex-end", xs: "flex-start" },
                      marginTop: "2rem",
                    }}
                    gap={3}
                  >
                    <Link
                      to="/Login"
                      style={{ textDecoration: "none", color: "#063340" }}
                    >
                      <Button
                        sx={{
                          color: "#063340",
                          "&:hover": {
                            backgroundColor: "#063340",
                            borderColor: "#063340",
                            color: "#f5f5f5",
                            boxShadow: "none",
                          },
                          borderRadius: "0rem",
                          fontSize: "16px",
                        }}
                        size="large"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link
                      to="/Signup"
                      style={{ textDecoration: "none", color: "#f5f5f5" }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: "#063340",
                          borderColor: "#063340",
                          "&:hover": {
                            backgroundColor: "#04D010",
                            borderColor: "#04D010",
                            color: "#063340",
                            boxShadow: "none",
                          },
                          borderRadius: "0rem",
                          fontSize: "16px",
                        }}
                      >
                        Sign up
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  <Box
                    sx={{
                      marginTop: "4rem",
                      fontFamily: "sans-serif",
                      fontWight: 800,
                      fontSize: "35px",
                      display: "flex",
                      color: "#063340",
                    }}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Cooking gone worng? ",
                          "Late night at office?",
                          "Hungry?",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#686b78",
                        letterSpacing: "1px",
                        marginTop: ".5rem",
                      }}
                    >
                      Order food from favourite tifin near you.
                    </Typography>
                  </Box>
                  <Box>
                    <SearchBox />
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "2rem", color: "#a9abb9" }}
                    >
                      POPULAR AREA IN AHMEDABAD
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: ".5rem" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#686b78",
                          fontWeight: 600,
                          marginRight: "6px",
                        }}
                      >
                        Nikol
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#93959f",
                          fontWeight: 600,
                          marginRight: "6px",
                        }}
                      >
                        Bodakdev
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#686b78",
                          fontWeight: 600,
                          marginRight: "6px",
                        }}
                      >
                        Memnagar
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#93959f",
                          fontWeight: 600,
                          marginRight: "6px",
                        }}
                      >
                        Bopal
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#686b78",
                          fontWeight: 600,
                          marginRight: "6px",
                        }}
                      >
                        Gota
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#93959f",
                          fontWeight: 600,
                          marginRight: "6px",
                        }}
                      >
                        & more.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item md={5.5}>
          <CardMedia
            component="img"
            image="/images/lunch8.jpg"
            alt="Paella dish"
            sx={{
              height: "85vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        md={12}
        gap={4}
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          minHeight: { md: "50vh", xs: "80vh" },
          backgroundColor: "#08313A",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img alt="imageforabout" src="./images/type1.png" height="80px" />
          <Typography
            variant="subtitle1"
            sx={{ color: "#f5f5f5", fontWeight: 550, marginTop: "1.5rem" }}
          >
            No Minimum Order
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#f5f5f5",
              marginTop: ".5rem",
              textAlign: "center",
              marginX: "16px",
            }}
          >
            Order in for yourself or for the group, with no restrictions on
            order value
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img alt="imageforabout" src="./images/type2.png" height="80px" />
          <Typography
            variant="subtitle1"
            sx={{ color: "#f5f5f5", fontWeight: 550, marginTop: "1.5rem" }}
          >
            Live Order Tracking
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#f5f5f5",
              marginTop: ".5rem",
              textAlign: "center",
              marginX: "16px",
            }}
          >
            Know where your order is at all times, from the restaurant to your
            doorstep
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img alt="imageforabout" src="./images/type3.png" height="80px" />
          <Typography
            variant="subtitle1"
            sx={{ color: "#f5f5f5", fontWeight: 550, marginTop: "1.5rem" }}
          >
            Lightning-Fast Delivery
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#f5f5f5",
              marginTop: ".5rem",
              textAlign: "center",
              marginX: "16px",
            }}
          >
            Experience Swiggy's superfast delivery for food delivered fresh & on
            time
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={12}
        sx={{
          display: "flex",
          minHeight: "80vh",
          backgroundColor: "#f5f5f5",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            background: `url(${"./images/pocket.jpg"}) center center/cover `,
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
          height="80vh"
          width="100vw"
        >
          <Typography
            variant="h4"
            sx={{
              color: "#282c3f",
              fontWeight: "600",
              marginTop: "8rem",
              marginX: "4rem",
            }}
          >
            Home Food in your pocket
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#282c3f",
              marginX: "4rem",
              marginTop: "1rem",
              lineBreak: "strict",
            }}
          >
            Order from your favorite Tifin Service Provider & track <br /> on
            the go, with the all-new AppElite app.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
export default Header;
