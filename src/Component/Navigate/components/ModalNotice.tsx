import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Chip, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';

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

const notifications = [
  { id: 1, name: 'Order #12345', status: 'Shipped', date: '2024-11-10', icon: <LocalShippingIcon />, color: 'primary' },
  { id: 2, name: 'Order #12346', status: 'Delivered', date: '2024-11-11', icon: <DoneIcon />, color: 'success' },
  { id: 3, name: 'Order #12347', status: 'Delayed', date: '2024-11-12', icon: <ErrorIcon />, color: 'error' },
  { id: 4, name: 'Order #12348', status: 'Pending', date: '2024-11-13', icon: <AccessTimeIcon />, color: 'warning' },
];

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
          {notifications.map(notification => (
            <React.Fragment key={notification.id}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{notification.icon}</ListItemIcon>
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
          ))}
        </Box>
      </Modal>
    </div>
  );
};
