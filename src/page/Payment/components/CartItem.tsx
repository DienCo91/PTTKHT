import { CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface ICartItem {
  item: any;
}

const CartItem: React.FC<ICartItem> = ({ item }) => {
  return (
    <Grid container alignItems="center" spacing={2} px={2} mt={2}>
      <Grid item>
        <CardMedia component="img" image={item?.media.link[0]} alt="Product Image" sx={{ width: 60 }} />
      </Grid>
      <Grid item xs>
        <Typography>{item?.productName}</Typography>
        <Typography display="inline" fontSize={14}>
          Quantity : {item?.quantity}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>{item?.productPrice}</Typography>
      </Grid>
    </Grid>
  );
};

export default CartItem;
