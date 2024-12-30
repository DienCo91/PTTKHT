import { RootState } from '@/app/store';
import { INotice } from '@/feature/user/userSlice';
import { getNotice } from '@/util/data';
import { getChipStyles } from '@/util/util';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Chip, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface IModalNotice {
  toggleModalNotice: () => void;
  open: boolean;
  toggleDrawer: () => void;
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

export const ModalNotice: React.FC<IModalNotice> = ({ open, toggleModalNotice, toggleDrawer }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

  const notifications = React.useMemo(() => {
    const notice = getNotice();
    if (notice && user && user.role !== 'admin') return notice.filter(item => item.userName === user.name);
    if (notice && user && user.role === 'admin') return notice;
    return [];
  }, [open]);

  const handleViewDetail = (notification: INotice) => {
    toggleDrawer();
    toggleModalNotice();
    navigate('/invoice', {
      state: {
        data: { ...notification },
      },
    });
  };

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
          {notifications.length > 0 ? (
            notifications.map(notification => {
              if (!notification) return;
              return (
                <React.Fragment key={notification?.id || ''}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleViewDetail(notification)}>
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
            })
          ) : (
            <Typography width={'100%'} textAlign={'center'} marginTop={2} color="#434343cc">
              Notice empty
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
};
