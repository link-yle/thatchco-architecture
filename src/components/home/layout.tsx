import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainLayout } from '../main-layout';
import { Navbar } from './navbar';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <Navbar />
      {children}
    </MainLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
