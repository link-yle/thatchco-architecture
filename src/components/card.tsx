import { useState } from 'react';
import MuiCard from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const Card = () => {
  return (
    <MuiCard
      sx={{
        minWidth: 345,
        '& + &': {
          marginLeft: theme => theme.spacing(1)
        }
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image="/static/logo.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h3">Welcome to Thatch</Typography>
        <Typography variant="body2" color="text.secondary" my={2}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: theme => '1px solid ' + theme.palette.grey[200]
        }}
      >
        <Typography color="text.secondary" variant="caption">3 Places - 3350</Typography>
        <IconButton aria-label="more">
          <MoreHorizIcon />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
}