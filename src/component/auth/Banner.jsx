import React from "react";
import logo from "../../assets/image/logo2.png";
import bgauth from "../../assets/image/bg-reg.png";

export default function Banner() {
  return (
    <div
      style={{
        background: `url(${bgauth})`,
        width: "580px",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20vh",
        }}
      >
        <img src={logo} alt="logo" width="200" />

        <h3
          style={{
            fontSize: "32px",
            color: "#fff",
            width: "350px",
            textAlign: "center",
            marginTop: "30vh",
            marginBottom: "16px",
          }}
        >
          Tailor Shop Management Software
        </h3>
        <p
          style={{
            fontSize: "16px",
            color: "#fff",
            width: "79%",
            textAlign: "center",
            lineHeight: "25px",
            margin: "0",
          }}
        >
          With Order Tracking, Accounting, Invoicing, Measurement, POS,
          Inventory, Multiple Tailor Shop Management etc.
        </p>
      </div>
    </div>
  );
}
