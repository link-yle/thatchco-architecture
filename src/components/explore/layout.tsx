import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { MainLayout } from '../main-layout';
import { Footer } from '../footer';
import { Navbar } from './navbar';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <MainLayout minHeight={172}>
      <Navbar />
      {children}
    </MainLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
