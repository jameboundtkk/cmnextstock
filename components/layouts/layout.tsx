import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import React, { ReactElement, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div>
      <React.Fragment>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Header />
          <Menu />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              padding: "3px",
            }}
          >
            <Toolbar />
            <Container fixed>{children}</Container>
          </Box>
          <Footer
            styleCss={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: "100%",
              backgroundColor: "#EEEEEE",
              color: "black",
              fontSize: 13,
              textAlign: "left",
              height: 30,
              paddingLeft: 8,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontWeight: 900,
            }}
          />
          <style jsx global>
            {`
              body {
                margin: 0px;
              }
            `}
          </style>
        </Box>
      </React.Fragment>
    </div>
  );
}
