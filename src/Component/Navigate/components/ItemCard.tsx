import { RootState } from '@/app/store';
import { User } from '@/feature/user/userSlice';
import { getAllUser, setUser } from '@/util/data';
import { Product } from '@/util/types';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

interface IItemCard {
  item: Product;
  setIsRemove: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemCard: React.FC<IItemCard> = ({ item, setIsRemove }) => {
  const user = useSelector((state: RootState) => state.user.user);

  const [quantity, setQuantity] = useState<number>(item?.quantity);

  const updateItemCard = (q: number) => {
    const users = getAllUser();
    const filterUser = (users as User[]).filter(u => u.name !== user?.name);
    const currentUsers = (users as User[]).find(u => u.name === user?.name);
    const cardFilter = currentUsers?.card.filter(c => c.productID !== item.productID);

    const currentUsersNew = { ...(currentUsers as User), card: [{ ...item, quantity: q }, ...(cardFilter || [])] };

    setUser([currentUsersNew, ...filterUser]);
  };

  const handleRemoveItem = () => {
    const users = getAllUser();
    const filterUser = (users as User[]).filter(u => u.name !== user?.name);
    const currentUsers = (users as User[]).find(u => u.name === user?.name);
    const cardFilter = currentUsers?.card.filter(c => c.productID !== item.productID);
    const currentUsersNew = { ...(currentUsers as User), card: [...(cardFilter || [])] };
    setUser([currentUsersNew, ...filterUser]);
    setIsRemove(pre => !pre);
  };

  const onDecrease = () => {
    setQuantity(pre => pre - 1);
    updateItemCard(quantity - 1);
  };
  const onIncrease = () => {
    setQuantity(pre => pre + 1);
    updateItemCard(quantity + 1);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val);
  };

  if (!item) return;

  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden', display: 'flex', height: 'auto', mt: 2 }}>
      <CardMedia component="img" height="140" image={item?.media.link[0]} alt="Product Image" sx={{ width: 200 }} />

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" fontWeight="bold">
          {item?.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {`${item?.productLabel} - ${item?.productColor}`}
        </Typography>

        {/* Giá và nút Thêm vào giỏ hàng */}
        <Typography variant="h6" color="primary">
          {`${formatNumber(Number(item?.productPrice.split(' ')[0].replace('.', '')) * quantity)} VND`}
        </Typography>
        {quantity && (
          <div className="flex items-center">
            <Typography variant="body2">Quantity :</Typography>
            <Box display="flex" alignItems="center">
              {/* Sử dụng MUI Button để có hiệu ứng ripple */}
              <Button
                onClick={onDecrease}
                disabled={quantity <= 1}
                sx={{
                  fontSize: 20,
                  minWidth: 20,
                }}>
                -
              </Button>

              <Typography variant="body1" display="inline" sx={{ mx: 1 }}>
                {quantity}
              </Typography>

              <Button
                onClick={onIncrease}
                sx={{
                  fontSize: 20,
                  minWidth: 20,
                }}>
                +
              </Button>
            </Box>
          </div>
        )}
        <Typography textAlign={'right'} width={'100%'}>
          <Button onClick={handleRemoveItem}>Remove</Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
