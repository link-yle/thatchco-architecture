import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Footer } from '../footer';
import { Navbar } from './navbar';

interface LayoutProps {
  children?: ReactNode;
}

const LayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100%',
  })
);

const LayoutWrapper = styled('div')(
  ({ theme }) => ({
    background: theme.palette.background.paper,
    height: '100%',
  })
);

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutRoot>
      <Container maxWidth="xs" disableGutters>
        <LayoutWrapper>
          <Navbar />
          {children}
          <Footer />
        </LayoutWrapper>
      </Container>
    </LayoutRoot>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
