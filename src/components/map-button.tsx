import type { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import type { Map } from 'src/types/map';

interface MapButtonProps {
  map: Map;
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 250,
  borderRadius: 12,
  width: '100% !important', // Overrides inline-style
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: 12
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

export const MapButton: FC<MapButtonProps> = (props) => {
  const { map } = props;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
      <ImageButton
        focusRipple
        key={map.label}
      >
        <ImageSrc style={{ backgroundImage: `url(${map.image})` }} />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {map.label}
          </Typography>
        </Image>
      </ImageButton>
    </Box>
  );
}