import { RootState } from '@/app/store';
import { setFeeShip } from '@/feature/card/cardSlice';
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const DeliveryOptions = () => {
  const dispatch = useDispatch();
  const feeShipping = useSelector((state: RootState) => state.card.feeShip);

  const handleChange = (event: any) => {
    dispatch(setFeeShip(event.target.value));
  };

  return (
    <Box sx={{ flex: 1, pr: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
        Delivery Options
      </Typography>

      <RadioGroup value={feeShipping} onChange={handleChange}>
        <Box sx={{ mb: 1.5 }}>
          <FormControlLabel
            value="0"
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
            value="40.000 VND"
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
            value="90.000 VND"
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
