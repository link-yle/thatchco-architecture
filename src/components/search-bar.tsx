import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return (
    <TextField
      fullWidth
      placeholder="Search People, Places & Keywords"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ mt: 3 }}
    />
  );
};
