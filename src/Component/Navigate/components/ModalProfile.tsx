import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import AvatarUser from './AvatarUser';
import { Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { getNotice } from '@/util/data';
import { Product } from '@/util/types';
import { INotice } from '@/feature/user/userSlice';

interface IModalProfile {
  toggleModalProfile: () => void;
  open: boolean;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalProfile: React.FC<IModalProfile> = ({ open, toggleModalProfile }) => {
  const user = useSelector((state: RootState) => state.user.user);

  const total = getNotice().reduce((sum: number, item: INotice) => {
    const x =
      item.status !== 'Pending'
        ? item?.listProducts?.reduce((sum: number, item: Product) => {
            const numericValue = Number(item.productPrice.replace(/\./g, '').replace(' VND', ''));
            return sum + numericValue * item.quantity;
          }, 0) || 0
        : 0;
    return sum + x;
  }, 0);

  const formattedTotal = new Intl.NumberFormat('vi-VN').format(total || 0) + ' VND';

  return (
    <div>
      <Modal
        open={open}
        onClose={toggleModalProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography textAlign={'center'} fontWeight={'500'} fontSize={24}>
            Profile
          </Typography>
          <AvatarUser />
          <Box sx={{ mx: 'auto', mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Name
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {user?.name}
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Role
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {user?.role}
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Email account
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {user?.email}
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Mobile number
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {user?.phone}
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Location
              </Typography>
              <Typography variant="body2" color="textPrimary">
                VN
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Amount received
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {formattedTotal||0}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
