import { useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

interface Section {
  label: string;
  href: string;
  icon: ReactNode;
}

const sections: Section[] = [
  {
    label: 'Home',
    href: '/',
    icon: <HomeIcon />
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: <SearchIcon />
  },
  {
    label: '"Your Map',
    href: '/places/map',
    icon: <MapOutlinedIcon />
  },
  {
    label: '"Your Library',
    href: '/boards',
    icon: <LocalLibraryOutlinedIcon />
  },
];

export const Footer: FC = () => {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(0);

  const handleNavChange = (idx: any) => {
    router.push(sections[idx].href);
  };

  useEffect(() => {
    console.log('path=', current)

    setCurrent(sections.findIndex(section => router.asPath === section.href));
  }, [router.asPath]);

  return (
    <BottomNavigation
      showLabels
      value={current}
      onChange={(event, newValue) => handleNavChange(newValue)}
      sx={{ position: 'sticky', bottom: 0, height: 76 }}
    >
      {sections.map((section, i) => (
        <BottomNavigationAction key={i} label={section.label} icon={section.icon} />
      ))}
    </BottomNavigation>
  );
};
