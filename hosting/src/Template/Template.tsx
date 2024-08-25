import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MainAreaHeader } from "./app/MainAreaHeader";
import { CustomDrawer } from "./app/CustomDrawer";
import { DrawerMenu } from "./drawerMenu";
import { TopBar } from "./app/TopBar";

export function Main() {
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const [drawerWidth, setDrawerWidth] = useState(280);

  return (
    <Box>
      <TopBar />
      <Box display={"flex"}>
        <CustomDrawer
          isDrawerOpen={isDrawerOpen}
          setDrawerOpen={setDrawerOpen}
          drawerWidth={drawerWidth}
          setDrawerWidth={setDrawerWidth}
        >
          <DrawerMenu></DrawerMenu>
        </CustomDrawer>
        <Box
          id="main_container"
          sx={{
            width: "100%",
            p: 0,
            minHeight: "100vh",
            borderLeft: "solid 1px #ddd",
          }}
        >
          <Container maxWidth={"lg"}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
