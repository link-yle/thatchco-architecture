import type { FC, ReactNode } from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';

interface TitleContainerProps {
  title?: string;
  variant?: any;
  children?: ReactNode;
}

export const TitleContainer: FC<TitleContainerProps> = ({ variant = 'subtitle1', title, children }) => {
  return (
    <Box my={6} ml={2}>
      {title && <Typography variant={variant} fontWeight="bold">{title}</Typography>}
      <Divider />
      <Box my={2}>
        {children}
      </Box>
    </Box>
  );
};
