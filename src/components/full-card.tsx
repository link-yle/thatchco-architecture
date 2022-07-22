import type { FC, ReactNode } from 'react';
import MuiCard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

interface CardProps {
  children: ReactNode;
}

export const Card: FC<CardProps> = (props) => {
  const { children } = props;

  return (
    <MuiCard
      sx={{
        width: '100%',
        p: 5
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image="/static/logo.jpg"
        alt="Mock Use Logo"
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </CardContent>
    </MuiCard>
  );
}