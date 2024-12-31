import { RootState } from '@/app/store';
import { INotice } from '@/feature/user/userSlice';
import { getNotice, getProductAll } from '@/util/data';
import { getChipStyles } from '@/util/util';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Chip, Divider, ListItem, ListItemButton, ListItemText, Rating, Typography } from '@mui/material';
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
  width: 600,
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

  const handleViewDetail = (notification: INotice) => {
    toggleDrawer();
    toggleModalNotice();
    navigate('/invoice', {
      state: {
        data: { ...notification },
      },
    });
  };

  const newNotice = getNotice().filter(i => {
    if (i.isComment) {
      if (user?.name === 'admin') return i.userName !== user?.name;
      else return i.userName === 'admin';
    }
    return i.userName === user?.name;
  });

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
          {newNotice.length > 0 ? (
            newNotice.map((notification, index) => {
              if (!notification) return;

              if (notification.isComment) {
                const image = getProductAll().find(product => String(product?.productID) === notification?.productId);
                return (
                  <React.Fragment key={index || ''}>
                    <ListItem disablePadding>
                      <img src={image?.media.link[0]} alt="image" className="w-[100px] h-[100px] object-cover" />
                      <ListItemButton>
                        <ListItemText
                          primary={
                            <div className="flex flex-1 flex-col justify-between">
                              <Rating
                                name="comment-rating"
                                value={notification.rating}
                                precision={0.5}
                                sx={{ marginRight: 1 }}
                                readOnly
                              />
                              <div className="flex justify-between">
                                <Typography variant="body1" fontWeight="thin">
                                  Comment: <br /> {notification.message}
                                </Typography>

                                <Typography variant="body2" fontWeight="thin">
                                  From : {notification.userName}
                                </Typography>
                              </div>
                            </div>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              }

              return (
                <React.Fragment key={notification?.id || ''}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleViewDetail(notification)}>
                      <div className="w-[100px] pl-[20px]">
                        {notification.status !== 'Finished' ? <AccessTimeIcon /> : <DoneAllIcon color="success" />}
                      </div>
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
                      <Chip label={notification.status} size="small" sx={getChipStyles(notification?.color || '')} />
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
