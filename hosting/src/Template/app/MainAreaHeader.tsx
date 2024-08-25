import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export function MainAreaHeader(props: {
  isDrawerOpen: boolean;
  setDrawerOpen: (value: React.SetStateAction<boolean>) => void;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mx: 1,
        marginTop: 1,
        height: '40px',
      }}
    >
      {props.isDrawerOpen ? (
        <></>
      ) : (
        <IconButton
          onClick={() => {
            props.setDrawerOpen(!props.isDrawerOpen);
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
    </Box>
  );
}
