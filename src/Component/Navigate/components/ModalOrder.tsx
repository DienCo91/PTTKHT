import { RootState } from '@/app/store';
import { INotice } from '@/feature/user/userSlice';
import { getNotice } from '@/util/data';
import { Box, Divider, ListItem, ListItemButton, ListItemText, Modal, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  minHeight: 400,
};

interface IModalOrder {
  toggleModalOrder: () => void;
  open: boolean;
  toggleDrawer: () => void;
}

const ModalOrder: React.FC<IModalOrder> = ({ open, toggleModalOrder, toggleDrawer }) => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);

  const notifications = React.useMemo(() => {
    const notice = getNotice();

    if (notice && user && user.role !== 'admin')
      return notice.filter(item => item.userName === user.name && Boolean(!item?.isComment));
    if (notice && user && user.role === 'admin') return notice.filter(item => Boolean(!item?.isComment));
    return [];
  }, [open]);

  const handleViewDetail = (notification: INotice) => {
    toggleDrawer();
    toggleModalOrder();
    navigate('/invoice', {
      state: {
        data: { ...notification },
      },
    });
  };

  console.log('notifications :>> ', notifications);

  return (
    <Modal
      open={open}
      onClose={toggleModalOrder}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography textAlign={'center'} fontWeight={'500'} fontSize={24}>
          Order
        </Typography>
        {notifications.length > 0 ? (
          notifications.map(notification => {
            if (!notification) return;

            return (
              <React.Fragment key={notification?.id || ''}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleViewDetail(notification)}>
                    <ListItemText
                      primary={
                        <>
                          <Typography variant="body1" fontWeight="bold">
                            Order {notification?.id?.slice(13, 15)} {notification.isBill ? '( Paid )' : '( Unpaid )'}
                          </Typography>
                          <Typography variant="body2" fontWeight="thin">
                            from : {notification.userName}
                          </Typography>
                        </>
                      }
                      secondary={
                        <Typography variant="body2" color="textSecondary">
                          {notification.date}
                        </Typography>
                      }
                    />
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
  );
};

export default ModalOrder;
