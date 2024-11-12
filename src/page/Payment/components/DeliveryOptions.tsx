import React from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';

const DeliveryOptions = () => {
  const [value, setValue] = React.useState('standard');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ flex: 1, pr: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
        Delivery Options
      </Typography>

      <RadioGroup value={value} onChange={handleChange}>
        <Box sx={{ mb: 1.5 }}>
          <FormControlLabel
            value="standard"
            control={
              <Radio
                sx={{
                  color: '#6366F1',
                  '&.Mui-checked': {
                    color: '#6366F1',
                  },
                }}
              />
            }
            label={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Typography>Standard 5-7 Business Days</Typography>
                <Typography sx={{ color: '#10B981' }}>FREE</Typography>
              </Box>
            }
            sx={{
              width: '100%',
              margin: 0,
              '& .MuiFormControlLabel-label': {
                width: '100%',
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 1.5 }}>
          <FormControlLabel
            value="express"
            control={
              <Radio
                sx={{
                  color: '#6366F1',
                  '&.Mui-checked': {
                    color: '#6366F1',
                  },
                }}
              />
            }
            label={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Typography>2-4 Business Days</Typography>
                <Typography sx={{ color: 'text.secondary' }}>+ 40.000 VND</Typography>
              </Box>
            }
            sx={{
              width: '100%',
              margin: 0,
              '& .MuiFormControlLabel-label': {
                width: '100%',
              },
            }}
          />
        </Box>

        <Box>
          <FormControlLabel
            value="same-day"
            control={
              <Radio
                sx={{
                  color: '#6366F1',
                  '&.Mui-checked': {
                    color: '#6366F1',
                  },
                }}
              />
            }
            label={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Typography>Same day delivery</Typography>
                <Typography sx={{ color: 'text.secondary' }}>+ 90.000 VND</Typography>
              </Box>
            }
            sx={{
              width: '100%',
              margin: 0,
              '& .MuiFormControlLabel-label': {
                width: '100%',
              },
            }}
          />
        </Box>
      </RadioGroup>
    </Box>
  );
};

export default DeliveryOptions;
