import { RootState } from '@/app/store';
import { setProducts } from '@/feature/card/cardSlice';
import { data } from '@/util/data';
import { Box, Button, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss';
import { toast } from 'react-toastify';

const DetailItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const products = useSelector((state: RootState) => state.card.listProducts);

  useEffect(() => {
    if (!id) {
      navigation('/');
    }
  }, [id, navigation]);

  const addCart = (item: any) => {
    const index = products.findIndex(p => p.productID === item.productID);

    if (index > -1) {
      const updatedProducts = [
        ...products.slice(0, index),
        { ...products[index], quantity: products[index].quantity + 1 },
        ...products.slice(index + 1),
      ];
      toast.success('Product added to card');
      return dispatch(setProducts(updatedProducts));
    }
    toast.success('Product added to card');
    return dispatch(setProducts([{ ...item, quantity: 1 }, ...products]));
  };

  const item = data.find(item => item.productID.toString() === id);

  return (
    <Box
      sx={{
        display: 'flex',
        margin: '20px auto',
        width: '80%',
        height: '100vh',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {/* Ảnh bên trái */}
      <div className="image-container  w-[400px] h-[400px] 2xl:w-[600px] 2xl:h-[600px] rounded-sm overflow-hidden shadow-lg">
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
            {`${item?.productLabel} - ${item?.productColor}`}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            {`${item?.productPrice}`}
          </Typography>
        </CardContent>

        {/* Nút Add to Cart */}
        <Box sx={{ padding: 3, display: 'flex', alignItems: 'center' }}>
          <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }} onClick={() => addCart(item)}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailItem;
