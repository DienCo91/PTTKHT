import { RootState } from '@/app/store';
import { setProducts } from '@/feature/card/cardSlice';
import { setUser } from '@/feature/user/userSlice';
import { getAllUser, getNotice } from '@/util/data';
import { Logout } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import { Badge, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AvatarUser from './AvatarUser';
import { ModalNotice } from './ModalNotice';
import { ModalProfile } from './ModalProfile';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from 'react-router-dom';

interface IDrawerNav {
  open: boolean;
  toggleDrawer: () => void;
}
const DrawerNav: React.FC<IDrawerNav> = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.user);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openNotice, setOpenNotice] = useState<boolean>(false);

  const toggleModalProfile = () => {
    setOpenProfile(pre => !pre);
  };

  const toggleModalNotice = () => {
    setOpenNotice(pre => !pre);
  };

  const users = getAllUser();

  const totalNotice = useMemo(() => {
    const notices = getNotice();

    return notices.filter(e => e.userName === user?.name).length;
  }, [user, users]);

  const handleClickList = () => {
    toggleDrawer();
    navigate('/products');
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer} anchor={'right'}>
        <Box sx={{ width: 300 }} role="presentation">
          <AvatarUser />

          <Box>
            <List>
              <ListItem key={'Profile'} disablePadding divider>
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
                    <Badge badgeContent={totalNotice} color="primary">
                      <NotificationsActiveIcon />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText primary={'Notification'} />
                  <ChevronRightIcon />
                </ListItemButton>
              </ListItem>
              {user?.role === 'admin' && (
                <ListItem key={'ListProduct'} disablePadding onClick={handleClickList}>
                  <ListItemButton divider>
                    <ListItemIcon>
                      {/* show total notice */}
                      <Badge color="primary">
                        <ListIcon />
                      </Badge>
                    </ListItemIcon>
                    <ListItemText primary={'List Product'} />
                    <ChevronRightIcon />
                  </ListItemButton>
                </ListItem>
              )}
              <ListItem key={'Log Out'} disablePadding>
                <ListItemButton
                  divider
                  onClick={() => {
                    dispatch(setUser(null));
                    dispatch(setProducts([]));
                  }}>
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
      <ModalNotice open={openNotice} toggleModalNotice={toggleModalNotice} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default DrawerNav;
