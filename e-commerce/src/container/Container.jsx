import React from "react";
import Container from "@mui/material/Container";

const Conteiner = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};

export default Conteiner;
