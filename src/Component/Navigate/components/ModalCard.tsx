import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useNavigate } from 'react-router-dom';

interface IModalCard {
  open: boolean;
  handleClose: () => void;
}

const ModalCard: React.FC<IModalCard> = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.card.listProducts);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          backgroundColor: 'white',
          width: '50%',
          height: '60%',
          borderRadius: 2,
          padding: 2,
          outline: 'none',
        }}>
        <Typography textAlign={'center'} fontSize={24}>
          Cart
        </Typography>
        <Box sx={{ minHeight: 200, overflow: 'auto', height: 300 }}>
          {products.length ? (
            products.map(item => <ItemCard key={item?.productID} item={item} />)
          ) : (
            <Typography textAlign={'center'} padding={10} height={100} fontSize={16}>
              Not Found !
            </Typography>
          )}
        </Box>
        {products.length > 0 && (
          <Button sx={{ textAlign: 'right', mt: 2 }} fullWidth variant="contained" onClick={() => navigate('/payment')}>
            Payment
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default ModalCard;
