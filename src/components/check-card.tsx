import { useState } from 'react';
import type { FC, ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface CheckCardProps {
  isChecked?: boolean;
  label: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckCard: FC<CheckCardProps> = (props) => {
  const { isChecked, label, name, onChange } = props;

  return (
    <MuiCard sx={{ minWidth: 280, mx: 1 }}>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', p: 2, pb: 0 }}>
        <FormControlLabel
          control={
            <Checkbox checked={isChecked} onChange={onChange} name={name} />
          }
          label={label}
        />
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </CardContent>
    </MuiCard>
  );
};
