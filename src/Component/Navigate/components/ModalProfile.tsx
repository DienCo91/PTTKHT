import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import AvatarUser from './AvatarUser';
import { Divider, Typography } from '@mui/material';

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
          <Divider />
          <Box sx={{ mx: 'auto', mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Name
              </Typography>
              <Typography variant="body2" color="textPrimary">
                your name
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Email account
              </Typography>
              <Typography variant="body2" color="textPrimary">
                yourname@gmail.com
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Mobile number
              </Typography>
              <Typography variant="body2" color="textPrimary">
                0987654321
              </Typography>
            </Box>
            <Divider />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Location
              </Typography>
              <Typography variant="body2" color="textPrimary">
                USA
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
