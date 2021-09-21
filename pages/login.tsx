import React, { ReactElement } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Router from "next/router";

interface Props {}

const onClickLogin = () => {
  Router.push("/stock");
};

export default function login({}: Props): ReactElement {
  return (
    <Container component="main" maxWidth="xs">
      <Card
        sx={{
          maxWidth: 345,
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CM NEXT STOCK
        </Typography>
        <span>v.1.0</span>
        <CardContent>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </CardContent>
        <CardActions
          sx={{
            width: "90%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<LoginIcon />}
            onClick={onClickLogin}
          >
            Sign In
          </Button>
        </CardActions>
        <CardActions
          sx={{
            width: "90%",
          }}
        >
          <Button
            variant="contained"
            color="inherit"
            fullWidth
            startIcon={<AccountBoxIcon />}
            onClick={() => {
              Router.push("/register");
            }}
          >
            Register
          </Button>
        </CardActions>
      </Card>

      <style jsx global>
        {`
          body {
            position: relative;
            height: 100%;
            margin: 0;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-image: linear-gradient(to bottom, #2e115d, #10091f);
            background-repeat: repeat;
            background-size: cover;
            background-color: black;
            text-align: center;
          }
        `}
      </style>
    </Container>
  );
}
