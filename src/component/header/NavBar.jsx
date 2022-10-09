import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import Logo from "../../assets/image/Logo.svg";

export default function NavBar() {
  return (
    <AppBar elevation={0}>
      <Container>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button color="inherit">
              <img src={Logo} alt="logo" width="70px" />
            </Button>
            <Box>
              <Button color="inherit">Modules</Button>
              <Button color="inherit">Features</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Why Dorjisoft</Button>
              <Button color="inherit">Sign in</Button>
              <Button color="inherit">Get started for free</Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
