import { FC, useState } from 'react';
import type { ChangeEvent } from 'react';
import { Box, Container } from '@mui/material';
import { CheckCard } from '../check-card';
import { StartProgress } from '../start-progress';
import { TitleContainer } from '../title-container';

const startItems = [
  {
    label: 'Create your account',
    isChecked: true
  },
  {
    label: 'Save your first place',
    isChecked: false
  },
  {
    label: 'Create your first board',
    isChecked: false
  },
  {
    label: 'Setup your tatch page',
    isChecked: false
  }
]

export const GettingStarted: FC = (props) => {
  const [selectedCount, setSelectedCount] = useState<number>(0);

  const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedCount(prev => prev + 1);
    } else {
      setSelectedCount(prev => prev - 1);
    }
  }

  return (
    <TitleContainer id="startprogress" title="Getting Started">
      <Box position="relative">
        <Box
          sx={{
            backgroundColor: 'background.paper',
            py: 2,
            pl: 12,
            overflowX: 'auto',
            display: 'flex',
          }}
          {...props}
        >
          {startItems.map((item, i) => (
            <CheckCard key={i} label={item.label} onChange={handleCheckChange} />
          ))}
        </Box>
        <Box position="absolute" top="30px" left="10px">
          <StartProgress allCount={startItems.length} selectedCount={selectedCount} />
        </Box>
      </Box>
    </TitleContainer>
  );
};
