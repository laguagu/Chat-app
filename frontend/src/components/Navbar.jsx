import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import jwt_decode from "jwt-decode"

function Navbar() {

  const tulosta = () => {
    const token = localStorage.getItem("userToken");
    console.log(token)
    const decodeToken = jwt_decode(token)
    console.log(decodeToken)
  }
  return (
    <AppBar position="static">
      <h1>KAVERI LISTA TULOSSA</h1>
      <Toolbar>
        <Typography variant="h6">ChatApp</Typography>
        <Button color="inherit" component={""} to="/" onClick={() => tulosta()}>
          Koti
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
