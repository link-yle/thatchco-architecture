import type { FC } from 'react';
import { Box,  } from '@mui/material';
import { Card } from '../card';
import { TitleContainer } from '../title-container';

export const PinnedBoard: FC = (props) => (
  <TitleContainer title="Pinned Board">
    <Box position="relative">
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: 2,
          overflowX: 'auto',
          display: 'flex',
        }}
        {...props}
      >
        <Card />
        <Card />
      </Box>
    </Box>
  </TitleContainer>
);
