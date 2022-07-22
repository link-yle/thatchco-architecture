import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import type { Theme } from '@mui/material';
import { styled } from '@mui/system';
import { Footer } from './footer';

interface MainLayoutProps {
  children?: ReactNode;
  minHeight?: string | number;
}

const MainLayoutRoot = styled(({ minHeight, ...props }: any) => (
  <div {...props} />
))(({ theme, minHeight }: { theme: Theme, minHeight: number | string }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  paddingTop: minHeight
}));

const MainLayoutWrapper = styled('div')(
  ({ theme }) => ({
    background: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto'
  })
);

export const MainLayout: FC<MainLayoutProps> = ({ children, minHeight }) => {
  return (
    <MainLayoutRoot minHeight={minHeight ?? 0}>
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto'
        }}
      >
        <MainLayoutWrapper>
          {children}
          <Footer />
        </MainLayoutWrapper>
      </Container>
    </MainLayoutRoot>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};
