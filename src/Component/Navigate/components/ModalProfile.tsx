import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import AvatarUser from './AvatarUser';
import { Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

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
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
