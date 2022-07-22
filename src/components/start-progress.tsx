import { useMemo } from 'react';
import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

interface StartProgressProps {
  selectedCount: number;
  allCount: number;
}

interface CircularProgressWithLabelProps extends CircularProgressProps {
  value: number,
  allCount: number,
  selectedCount: number
}

const CircularProgressWithLabel: FC<CircularProgressWithLabelProps> = (
  props
) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <label htmlFor="startprogress" aria-hidden="true" hidden>Loading:</label>
      <CircularProgress
        aria-labelledby="startprogress"
        aria-busy="false"
        thickness={2}
        variant="determinate"
        sx={{
          color: theme => theme.palette.grey[300]
        }}
        size={props.size}
        value={100}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${props.selectedCount} of ${props.allCount}`}</Typography>
      </Box>
      <CircularProgress
        aria-labelledby="startprogress"
        aria-busy="false"
        thickness={2}
        sx={{
          position: 'absolute',
        }}
        variant="determinate"
        value={props.value}
      />
    </Box>
  );
}

export const StartProgress: FC<StartProgressProps> = (props) => {
  const { allCount, selectedCount } = props;

  const percentage = useMemo(() => {
    return (selectedCount / allCount) * 100;
  }, [allCount, selectedCount]);

  return (
    <CircularProgressWithLabel
      size={70}
      allCount={allCount}
      selectedCount={selectedCount}
      value={percentage}
    />
  );
};