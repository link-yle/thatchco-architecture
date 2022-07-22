import type { FC } from 'react';
import NextLink from 'next/link';
import { AppBar, Box, Container, Typography, IconButton, Toolbar } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Navbar: FC = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: 'background.paper',
        borderBottomColor: 'divider',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        color: 'text.secondary'
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ py: 3 }}
        >
            <Box>
              <Typography color="primary" variant="h5">Good Evening</Typography>
              <Typography>Welcome Kyle Lin</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <NextLink
              href="/profile"
              passHref
            >
              <IconButton component="a" size="large">
                <AccountCircleOutlinedIcon fontSize="large" />
              </IconButton>
            </NextLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
