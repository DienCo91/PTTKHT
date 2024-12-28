import { RootState } from '@/app/store';
import { User } from '@/feature/user/userSlice';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Chip, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useSelector } from 'react-redux';

interface IModalNotice {
  toggleModalNotice: () => void;
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
  height: 400,
  overflow: 'auto',
};

const getChipStyles = (color: string) => {
  switch (color) {
    case 'primary':
      return { backgroundColor: 'primary.main', color: 'white' };
    case 'success':
      return { backgroundColor: 'success.main', color: 'white' };
    case 'error':
      return { backgroundColor: 'error.main', color: 'white' };
    case 'warning':
      return { backgroundColor: 'warning.main', color: 'white' };
    default:
      return { backgroundColor: 'grey.300', color: 'black' };
  }
};

export const ModalNotice: React.FC<IModalNotice> = ({ open, toggleModalNotice }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const currentUser = (users as User[]).find(u => u.name === user?.name);

  const notifications = currentUser?.notice;

  if (!notifications) return;
  return (
    <div>
      <Modal
        open={open}
        onClose={toggleModalNotice}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography textAlign={'center'} fontWeight={'500'} fontSize={24}>
            Notice
          </Typography>
          {notifications.map(notification => {
            if (!notification) return;
            return (
              <React.Fragment key={notification?.id || ''}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight="bold">
                          {notification.name}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="textSecondary">
                          {notification.date}
                        </Typography>
                      }
                    />
                    <Chip label={notification.status} size="small" sx={getChipStyles(notification.color)} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </Box>
      </Modal>
    </div>
  );
};
