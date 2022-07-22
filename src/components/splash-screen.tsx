import type { FC } from 'react';
import { Avatar, Box, CircularProgress } from '@mui/material';
import { Logo } from './logo';

export const SplashScreen: FC = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'neutral.900',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      left: 0,
      p: 3,
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 2000
    }}
  >
     <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Avatar
          aria-label="logo"
          sx={{ width: 60, height: 60 }}
        >
          <Logo />
        </Avatar>
        <label htmlFor="loadinglabel" hidden>Loading:</label>
        <CircularProgress
          aria-describedby="loadinglabel"
          aria-busy="true"
          size={68}
          sx={{
            position: 'absolute',
            top: -4,
            left: -4,
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  </Box>
);
