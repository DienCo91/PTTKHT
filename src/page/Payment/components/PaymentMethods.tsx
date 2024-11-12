import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LockIcon from '@mui/icons-material/Lock';
import {
  Avatar,
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

// Custom styled components
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#F9FAFB',
    '& fieldset': {
      border: 'none',
    },
  },
});

const PaymentMethods = () => {
  const [value, setValue] = React.useState('card');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 500, p: 2 }}>
      <Typography variant="h6" sx={{ mb: 3, color: 'text.primary', fontWeight: 500 }}>
        Payment Methods
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup value={value} onChange={handleChange} sx={{ gap: 2 }}>
          {/* Pay on Delivery */}
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Pay on Delivery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pay with cash on delivery
                </Typography>
              </Box>
            }
          />

          {/* Credit/Debit Cards */}
          <Box>
            <FormControlLabel
              value="card"
              control={<Radio />}
              label={
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        Credit/Debit Cards
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Pay with your Credit / Debit Card
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 0.5, ml: 2 }}>
                      <Avatar
                        sx={{ width: 32, height: 32, objectFit: 'contain' }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefI6pAZDTEXZqfmgJTghDkO1wpT39ZsuR8A&s"
                      />
                      <Avatar
                        sx={{ width: 32, height: 32, objectFit: 'contain' }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/640px-American_Express_logo_%282018%29.svg.png"
                      />
                      <Avatar
                        sx={{ width: 32, height: 32, objectFit: 'contain' }}
                        src="https://upload.wikimedia.org/wikipedia/commons/8/80/Maestro_2016.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              }
            />

            {value === 'card' && (
              <Box sx={{ pl: 4, pr: 1, mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ position: 'relative' }}>
                  <StyledTextField
                    fullWidth
                    placeholder="Card number"
                    variant="outlined"
                    InputProps={{
                      endAdornment: <CreditCardIcon sx={{ color: 'text.disabled' }} />,
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <StyledTextField
                    placeholder="MM / YY"
                    variant="outlined"
                    InputProps={{
                      endAdornment: <CalendarTodayIcon sx={{ color: 'text.disabled' }} />,
                    }}
                  />
                  <StyledTextField
                    placeholder="CVV"
                    type="password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: <LockIcon sx={{ color: 'text.disabled' }} />,
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default PaymentMethods;
