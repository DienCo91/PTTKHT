import { setProducts } from '@/feature/card/cardSlice';
import { setUser, User } from '@/feature/user/userSlice';
import { LoginApi } from '@/services/api';
import { getAllUser, setUser as setAllUser } from '@/util/data';
import { Box, Button, Container, Link, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  useEffect(() => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      setUsers(storedUsers);
    } catch (error) {
      console.error('Lỗi khi đọc dữ liệu từ Local Storage:', error);
      setUsers([]);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tabIndex === 0) {
      const u = getAllUser();
      if (u) {
        const user = (u as User[]).find(i => i.name === formData.name && i.password === formData.password);
        if (user) {
          dispatch(setUser(user));
          if (user?.card) dispatch(setProducts(user?.card));
          setTimeout(() => {
            navigate('/');
          }, 1000);
          return;
        }
      }
      const x = await LoginApi(formData);
      console.log('x :>> ', x);
      return toast.error('Login failed');
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Password and confirm password do not match!');
        return;
      }
      const updatedUsers = [...users, { ...formData, role: 'client' }];
      setAllUser(updatedUsers);
      toast.success('Success');
      setTabIndex(0);
      await LoginApi(formData);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
          bgcolor: 'background.paper',
        }}>
        <Typography variant="h5" component="h1" gutterBottom>
          {tabIndex === 0 ? 'Login' : 'Register'}
        </Typography>
        <Tabs
          value={tabIndex}
          onChange={(_event, newValue) => setTabIndex(newValue)}
          variant="fullWidth"
          sx={{ mb: 3 }}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <Box component="form" onSubmit={handleSubmit}>
          {tabIndex === 1 && (
            <>
              <TextField
                fullWidth
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Phone"
                type="number"
                margin="normal"
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </>
          )}
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {tabIndex === 1 && (
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              margin="normal"
              variant="outlined"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          )}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }} color="primary">
            {tabIndex === 0 ? 'Login' : 'Register'}
          </Button>
        </Box>

        {tabIndex === 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Don't have an account?
              <Link href="#" onClick={() => setTabIndex(1)} marginLeft={1}>
                Register
              </Link>
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Login;
