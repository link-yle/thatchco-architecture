import type { FC } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  Toolbar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Card } from '../full-card';
import { TitleContainer } from '../title-container';

export const Subscriptions: FC = (props) => {
  return (
    <Container maxWidth="xs">
      <TitleContainer title="Your Subscriptions">
        <Card>
          <Button size="large" variant="contained" startIcon={<SearchIcon />}>
            Find Creators
          </Button>
        </Card>
      </TitleContainer>
    </Container>
  );
};
