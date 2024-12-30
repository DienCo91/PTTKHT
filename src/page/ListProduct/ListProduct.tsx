import { getProductAll, setProductAll } from '@/util/data';
import { Product } from '@/util/types';
import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ModalAddProducts from './components/ModalAddProducts';

const ListProduct = () => {
  const [prod, setProds] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState<Product | null>(null);

  const handleDeleteItem = (item: Product) => {
    const newProducts = prod.filter(p => p.productID !== item.productID);
    setProductAll(newProducts);
    setProds(newProducts);
    toast.success('Product deleted');
  };

  const handleEditItem = (item: Product) => {
    setItemEdit(item);
    setOpen(true);
  };

  useEffect(() => {
    const products = getProductAll();
    setProds(products);
  }, [open]);

  return (
    <div className="mt-[100px] w-[100%] flex justify-center">
      <div className="w-[80%] relative">
        <Typography variant="h5" component="h1" gutterBottom textAlign={'center'} my={6} mb={8}>
          Product List
        </Typography>
        <Button variant="contained" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={() => setOpen(true)}>
          Add +
        </Button>
        {prod.map(product => (
          <Box
            key={product.productID}
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 2,
              boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              px: 2,
            }}>
            <CardMedia
              component="img"
              image={product.media.link[0]}
              alt={product.productName}
              sx={{
                width: 100,
                height: 100,
                objectFit: 'contain',
                borderRadius: '8px',
                marginRight: 2,
              }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product?.productColor || ''}
              </Typography>
              <Typography variant="body1" sx={{ color: 'red', marginTop: 1 }}>
                Price: {product.productPrice}
              </Typography>
              <Box display={'flex'} width={'100%'} justifyContent={'space-between'}>
                <Typography variant="body2" sx={{ color: '#007BFF', marginTop: 1 }}>
                  Quantity : {product.quantity}
                </Typography>
                <Box>
                  <Button onClick={() => handleEditItem(product)}>Edit</Button>
                  <Button onClick={() => handleDeleteItem(product)}>Delete</Button>
                </Box>
              </Box>
            </CardContent>
          </Box>
        ))}
      </div>
      <ModalAddProducts open={open} setOpen={setOpen} itemEdit={itemEdit} />
    </div>
  );
};

export default ListProduct;
