import { RootState } from '@/app/store';
import { setProducts } from '@/feature/card/cardSlice';
import { User } from '@/feature/user/userSlice';
import { getAllUser, getProductAll } from '@/util/data';
import { Product } from '@/util/types';
import { Box, Button, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CommentWithRating from './components/CommentWithRating';
import './styles.scss';

const DetailItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const products = useSelector((state: RootState) => state.card.listProducts);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (!id) {
      navigation('/');
    }
  }, [id, navigation]);

  const addCart = (item: Product) => {
    if (!user) return;
    const index = products?.findIndex(p => p.productID === item.productID);

    if (index > -1) {
      return toast.warn('Product added to card');
    }
    toast.success('Product added to card');
    const users = getAllUser();

    if (users) {
      const updatedUsers = (users as User[]).map(u =>
        user.name === u.name ? { ...u, card: [{ ...item, quantity: 1 }, ...(products || [])] } : u,
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
    return dispatch(setProducts([{ ...item, quantity: 1 }, ...(products || [])]));
  };

  const item = getProductAll().find(item => item.productID.toString() === id) as Product;

  console.log('products :>> ', products);

  return (
    <Box
      sx={{
        margin: 'auto',
        width: '80%',
        height: '100vh',
        marginTop: 14,
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <div className="image-container  w-[400px] h-[400px] 3xl:w-[600px] 3xl:h-[600px] rounded-sm overflow-hidden shadow-lg">
          <img src={item?.media.link[0]} alt="Image 1" className="image image-1 object-cover w-full h-full" />
          <img src={item?.media.link[1]} alt="Image 2" className="image image-2 object-cover w-full h-full" />
        </div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            alignItems: 'flex-end',
          }}>
          <CardContent sx={{ padding: 3 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {item?.productName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginY: 2 }}>
              {`${item?.productLabel || 'Special'} - ${item?.productColor || 'Special'}`}
            </Typography>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
              {`${item?.productPrice}`}
            </Typography>
          </CardContent>

          <Box sx={{ padding: 3, display: 'flex', alignItems: 'center' }}>
            <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }} onClick={() => addCart(item)}>
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <CommentWithRating />
    </Box>
  );
};

export default DetailItem;
