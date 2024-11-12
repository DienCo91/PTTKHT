import { Logout } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import { Badge, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import AvatarUser from './AvatarUser';
import { ModalNotice } from './ModalNotice';
import { ModalProfile } from './ModalProfile';

interface IDrawerNav {
  open: boolean;
  toggleDrawer: () => void;
}
const DrawerNav: React.FC<IDrawerNav> = ({ open, toggleDrawer }) => {
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openNotice, setOpenNotice] = useState<boolean>(false);

  const toggleModalProfile = () => {
    setOpenProfile(pre => !pre);
  };

  const toggleModalNotice = () => {
    setOpenNotice(pre => !pre);
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer} anchor={'right'}>
        <Box sx={{ width: 300 }} role="presentation">
          <AvatarUser />

          <Box>
            <List>
              <ListItem key={'Profile'} disablePadding>
                <ListItemButton onClick={() => setOpenProfile(true)}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Profile'} />
                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              <ListItem key={'Notification'} disablePadding onClick={() => setOpenNotice(true)}>
                <ListItemButton divider>
                  <ListItemIcon>
                    {/* show total notice */}
                    <Badge badgeContent={4} color="primary">
                      <NotificationsActiveIcon />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary={'Notification'} />
                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              <ListItem key={'Log Out'} disablePadding>
                <ListItemButton divider>
                  <ListItemIcon>
                    <Logout sx={{ color: 'red' }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'red' }} primary={'Log Out'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
      <ModalProfile open={openProfile} toggleModalProfile={toggleModalProfile} />
      <ModalNotice open={openNotice} toggleModalNotice={toggleModalNotice} />
    </>
  );
};

export default DrawerNav;
