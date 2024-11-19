import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useMemo } from 'react';
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
  const user = useSelector((state: RootState) => state.user.user);
  const listProducts = useSelector((state: RootState) => state.card.listProducts);

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const productNew = useMemo(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUsers = users.find(u => u.name === user?.name);

    return currentUsers?.card || [];
  }, [user, users, listProducts]);

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
          borderRadius: 2,
          padding: 2,
          outline: 'none',
        }}>
        <Typography textAlign={'center'} fontSize={24}>
          Cart
        </Typography>
        <Box sx={{ minHeight: 200, overflow: 'auto', height: 400 }}>
          {productNew.length ? (
            productNew.map(item => <ItemCard key={item?.productID} item={item} />)
          ) : (
            <Typography textAlign={'center'} padding={10} height={100} fontSize={16}>
              Not Found !
            </Typography>
          )}
        </Box>
        {productNew.length > 0 && (
          <Button
            sx={{ textAlign: 'right', mt: 2 }}
            fullWidth
            variant="contained"
            onClick={() => {
              navigate('/payment', { state: { data: productNew } });
              handleClose();
            }}>
            Payment
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default ModalCard;
