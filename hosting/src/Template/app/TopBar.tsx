import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      id="TopBar"
      sx={{ borderBottom: "1px solid #ddd" }}
    >
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0, display: { xs: "flex" }, marginRight: "auto" }}>
          <Titlelogo />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export function Titlelogo() {
  return (
    <Link to="/" className="NoDecoration">
      <Toolbar disableGutters sx={{ padding: 0 }}>
        <Typography
          variant="h6"
          noWrap
          sx={{
            ml: 4,
            mr: 2,
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "1.7rem",
          }}
        >
          Training Yard
        </Typography>
      </Toolbar>
    </Link>
  );
}
