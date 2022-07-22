import type { FC } from 'react';
import { AppBar, Box, Container, Typography, Toolbar } from '@mui/material';
import { SearchBar } from '../search-bar';

export const Navbar: FC = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        color: 'text.secondary'
      }}
    >
      <Container maxWidth="xs" sx={{ backgroundColor: 'background.paper'}}>
        <Toolbar
          disableGutters
          sx={{ py: 3, minHeight: 172 }}
        >
          <Box display="flex" flexDirection="column" width="100%">
            <Typography color="primary" variant="h4">Explore</Typography>
            <SearchBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
