import Image from 'next/image'
import { styled } from '@mui/material/styles';

export const Logo = () => {
  return (
    <Image src="/static/logo.jpg" width={68} height={68} alt="logo" />
  );
};
