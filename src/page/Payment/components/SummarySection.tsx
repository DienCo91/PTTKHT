import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

interface ISummarySection {
  total: string;
  feeShipping: string;
  priceProduct: string;
}

const SummarySection: React.FC<ISummarySection> = ({ total, feeShipping, priceProduct }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 400, ml: 'auto', mt: 4, px: 2 }}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>Subtotal</Typography>
        <Typography>{priceProduct}</Typography>
      </Box>
      <Divider />
      <Divider />
      <Box display="flex" justifyContent="space-between" my={1}>
        <Typography>Shipping Fee</Typography>
        <Typography color="primary">{feeShipping !== '0' ? feeShipping : 'FREE'}</Typography>
      </Box>
      <Divider />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="h6">Total due</Typography>
        <Typography variant="h6" color="primary">
          {total}
        </Typography>
      </Box>
    </Box>
  );
};

export default SummarySection;
