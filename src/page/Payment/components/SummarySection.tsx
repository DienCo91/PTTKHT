import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

const SummarySection = () => {
  const subtotal = 160.0;
  const salesTaxRate = 0.065;
  const salesTax = (subtotal * salesTaxRate).toFixed(2);
  const shippingFee = 0;
  const totalDue = (subtotal + parseFloat(salesTax) + shippingFee).toFixed(2);

  return (
    <Box sx={{ width: '100%', maxWidth: 400, ml: 'auto', mt: 4, px: 2 }}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Subtotal</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" my={1}>
        <Typography>Sales tax (6.5%)</Typography>
        <Typography>${salesTax}</Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" my={1}>
        <Typography>Shipping Fee</Typography>
        <Typography color="primary">FREE</Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="h6">Total due</Typography>
        <Typography variant="h6" color="primary">
          ${totalDue}
        </Typography>
      </Box>
    </Box>
  );
};

export default SummarySection;
