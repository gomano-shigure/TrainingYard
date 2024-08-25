import React, { ReactNode } from "react";
import { Box, Collapse } from "@mui/material";
import { Rnd } from "react-rnd";
const drawerDefaultWidth = 280;
const drawerMinWidth = 200;
const drawerMaxWidth = drawerMinWidth * 2;
const drawerHeight = "100vh";

export function CustomDrawer(props: {
  isDrawerOpen: boolean;
  setDrawerOpen: (value: React.SetStateAction<boolean>) => void;
  drawerWidth: number;
  setDrawerWidth: (value: React.SetStateAction<number>) => void;
  children?: ReactNode;
}) {
  return (
    <Collapse
      id="sidemenu_container"
      orientation="horizontal"
      in={props.isDrawerOpen}
      timeout={100}
      sx={{ display: "flex", minWidth: "auto !important" }}
    >
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: `${drawerDefaultWidth}px`,
          height: drawerHeight,
        }}
        size={{ width: `${props.drawerWidth}px`, height: drawerHeight }}
        disableDragging={true}
        dragAxis="x"
        minWidth={drawerMinWidth}
        maxWidth={drawerMaxWidth}
        minHeight={drawerHeight}
        maxHeight={drawerHeight}
        enableResizing={{ top: false, bottom: false, left: false, right: true }}
        onResize={(e, direction, ref, delta, position) => {
          props.setDrawerWidth(ref.offsetWidth);
        }}
        sx={{ flex: 1, position: "relative" }}
      >
        <Box sx={{}}>{props.children}</Box>
      </Rnd>
    </Collapse>
  );
}
