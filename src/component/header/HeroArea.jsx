import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Frame from "../../assets/image/frame.svg";

export default function HeroArea() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ height: "800px", background: theme.palette.primary.main }}>
        <Container>
          <Grid container paddingTop="150px" spacing={5}>
            <Grid item md={6}>
              <Typography variant="h1" component="h2">
                Tailor Shop Management Software
              </Typography>
              <Typography variant="p" component="p">
                DorjiSoft offers smart, industry-tailored solutions to solve the
                problems of small and medium businesses. We will help you access
                and manage your organization effectively.
              </Typography>
              <Button color="inherit">Get started for free</Button>
            </Grid>
            <Grid item md={6}>
              <img src={Frame} alt="heading-frame" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <div style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M4.80,-16.28 C-51.63,121.88 396.44,-67.59 520.59,58.70 L500.00,0.00 L-4.22,-48.84 Z"
            style={{ stroke: "none", fill: "#0071BC" }}
          />
        </svg>
      </div>
    </>
  );
}
