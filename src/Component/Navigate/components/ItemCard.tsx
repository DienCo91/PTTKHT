import { RootState } from '@/app/store';
import { setProducts } from '@/feature/card/cardSlice';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

interface IItemCard {
  item: any;
}

const ItemCard: React.FC<IItemCard> = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.card.listProducts);

  const handleRemoveItem = () => {
    const pr = products.filter(p => p.productID !== item.productID);
    dispatch(setProducts(pr));
  };

  if (!item) return;

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden', display: 'flex', height: 168, mt: 2 }}>
      {/* Hình ảnh sản phẩm */}
      <CardMedia component="img" height="140" image={item?.media.link[0]} alt="Product Image" sx={{ width: 200 }} />

      {/* Nội dung sản phẩm */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" fontWeight="bold">
          {item?.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {`${item?.productLabel} - ${item?.productColor}`}
        </Typography>

        {/* Giá và nút Thêm vào giỏ hàng */}
        <Typography variant="h6" color="primary">
          {`${item?.productPrice}`}
        </Typography>
        {item?.quantity && <Typography variant="body2">Quantity : {item?.quantity}</Typography>}
        <Typography textAlign={'right'} width={'100%'}>
          <Button onClick={handleRemoveItem}>Remove</Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
