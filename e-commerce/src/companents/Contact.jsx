import React from "react";

import TextField from "@mui/material/TextField";
function Contact() {
  const styles = () => {
    const input = document.getElementById("div-contact");
    input.style.width = "500px";
  };
  return (
    <div style={{ fontFamily: "sans-serif", height: "73vh" }}>
      <h3>contact </h3>
      <div
        onClick={styles}
        style={{ width: "300px", height: "150px" }}
        id="div-contact"
      >
        <TextField
          id="outlined-multiline-static"
          label="Şikayette bulun"
          multiline
          rows={4}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Contact;
