import { optionFilter } from '@/util/data';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Button, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '60ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}));

interface ISearchAppBar {
  handleSearch: ({ val, type }: { val: string; type: string }) => void;
}

export default function SearchAppBar({ handleSearch }: ISearchAppBar) {
  const [txt, setTxt] = useState<string>('');
  const [searchBy, setSearchBy] = useState<string>('');

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 1, overflow: 'hidden' }}>
      <AppBar position="static">
        <Toolbar>
          <Autocomplete
            options={optionFilter}
            sx={{ width: 300 }}
            onInputChange={(_e, value) => setSearchBy(value)}
            renderInput={params => (
              <TextField
                {...params}
                label="Search by"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    fieldset: {
                      borderColor: 'white',
                      opacity: 0.8,
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                      opacity: 1,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                    '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': {
                      color: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: 'white !important',
                  },
                  color: 'white',
                }}
              />
            )}
          />
          <Search style={{ marginLeft: 24, marginRight: 24 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={txt}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => setTxt(e.target.value)}
            />
          </Search>
          <Button
            variant="contained"
            sx={{ width: 200, background: '#eeeeee', color: 'black' }}
            onClick={() => handleSearch({ val: txt, type: searchBy })}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
