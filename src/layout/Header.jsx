import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import SupportIcon from "@mui/icons-material/Support";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#ffff", color: "#04D010" }}>
        <Toolbar>
          <Grid container>
            <Grid
              item
              md={8}
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingY: ".5rem",
              }}
            >
              <img alt="icon" src="/images/icon1.png" width="60" height="60" />

              <Typography
                sx={{
                  color: "#063340",
                  fontsize: "10px",
                  paddingLeft: "2rem",
                }}
              >
                <Button
                  sx={{
                    color: "#063340",
                  }}
                >
                  Ellisbridge
                </Button>
                Narolgam,Ahmedabad, Gujarat...
              </Typography>
              <KeyboardArrowDownIcon sx={{ color: "#063340" }} />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              gap={5}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingY: ".5rem",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "row", color: "#063340" }}
              >
                <SearchIcon />
                <Typography>Search</Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "row", color: "#063340" }}
              >
                <SupportIcon />
                <Typography>Help</Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "row", color: "#063340" }}
              >
                <PermIdentitySharpIcon />
                <Typography>User</Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
