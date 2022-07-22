import type { FC } from 'react';
import { useState } from 'react';
import NextLink from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Typography,
  Toolbar
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Navbar: FC = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: 'background.paper',
        borderBottomColor: 'divider',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        color: 'text.secondary'
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ py: 3 }}
        >
            <Box>
              <Typography color="primary" variant="h5">Your Library</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="outlined">+ New</Button>
        </Toolbar>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Created" {...a11yProps(0)} />
            <Tab label="Saved" {...a11yProps(1)} />
            <Tab label="Purchased" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Container>
    </AppBar>
  );
};
