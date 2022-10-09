import {
  FilledInput,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import Banner from "../component/auth/Banner";
import rightArrow from "../assets/image/right-arrow.svg";

export default function Register() {
  return (
    <div style={{ display: "flex" }}>
      <Banner />
      <div
        className="auth-page"
        style={{
          overflow: "hidden",
          position: "relative",
          flex: 1,
          width: "100%",
        }}
      >
        <div style={{ width: "90%", margin: "0 auto" }}>
          <h3
            style={{
              paddingTop: "5vh",
              fontSize: "38px",
              color: "#0071BC",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Welcome to DorjiSoft
          </h3>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#0071BC",
              margin: "0",
              letterSpacing: "2px",
            }}
          >
            Register your Account
          </p>
          <div>
            <div style={{ textAlign: "center", margin: "40px 0 30px 0" }}>
              <button
                style={{
                  border: "1px solid #0071BC",
                  outline: "0",
                  background: "#fff",
                  color: "#0071BC",
                  borderRadius: "30px",
                  padding: "15px 55px",
                  fontSize: "20px",
                  fontWeight: "600",
                  width: "250px",
                }}
              >
                Sign In
              </button>
              <button
                style={{
                  border: "1px solid #0071BC",
                  outline: "0",
                  background: "#0071BC",
                  color: "#fff",
                  borderRadius: "30px",
                  padding: "15px 55px",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginLeft: "-50px",
                  width: "250px",
                }}
              >
                Registration
              </button>
            </div>
          </div>

          <Grid container spacing={3}>
            <Grid item md={4}>
              <TextField
                helperText="Enter Your Name"
                label="Full Name"
                id="fullWidth"
                fullWidth
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                helperText="Enter Your Store Name"
                label="Store Name"
                id="namef"
                fullWidth
              />
            </Grid>
            <Grid item md={4}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">
                      .dorjisoft.com
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <FormHelperText id="outlined-weight-helper-text">
                  Enter Access URL
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <TextField
                helperText="Enter Your Email Address"
                label="Email Address"
                id="name"
                fullWidth
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                helperText="Password Must be 8 Word"
                label="Password"
                id="name"
                fullWidth
                type="password"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                helperText="Enter your phone number"
                label="Phone"
                id="name"
                fullWidth
              />
            </Grid>
            <Grid item md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Bussiness Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Loacation"
                >
                  <MenuItem value={10}>Bangladesh</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Loacation"
                >
                  <MenuItem value={10}>Dhaka</MenuItem>
                  <MenuItem value={11}>Faridpur</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Loacation"
                >
                  <MenuItem value={10}>14 Day Free Trail</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <div style={{ textAlign: "center", margin: "50px 0 0px 0" }}>
            <button
              style={{
                border: "1px solid #F7931E",
                outline: "0",
                background: "#F7931E",
                color: "#fff",
                borderRadius: "30px",
                padding: "15px 0px",
                fontSize: "20px",
                fontWeight: "600",

                width: "200px",
              }}
            >
              Registration{" "}
              <span>
                <img src={rightArrow} width="20" />
              </span>
            </button>
          </div>

          <div
            style={{
              position: "absolute",
              right: "-10%",
              top: "7%",
              background: "#0071BC",
              padding: "15px 35px",
              transform: "rotate(\n32deg)",
              width: "400px",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#fff", margin: 0, textAlign: "center" }}>
              Start your free 14-Day Trail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
