import { Product } from '@/util/types';
import { CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface ICartItem {
  item: Product;
}

const CartItem: React.FC<ICartItem> = ({ item }) => {
  const formatPrice =
    new Intl.NumberFormat('vi-VN').format(
      Number(Number(item.productPrice.replace(/\./g, '').replace(' VND', '')) * item?.quantity),
    ) + ' VND';

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
        <Typography>{formatPrice}</Typography>
      </Grid>
    </Grid>
  );
};

export default CartItem;
