import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  flatHouseNo: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  landmark: string;
  feeShipping?: string;
}

interface ICheckoutForm {
  handleSetFormData: (data: FormData) => void;
}

const CheckoutForm: React.FC<ICheckoutForm> = ({ handleSetFormData }) => {
  // State cho các trường dữ liệu
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+84',
    phoneNumber: '',
    flatHouseNo: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    landmark: '',
  });

  // Hàm cập nhật state
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Hàm kiểm tra xem các trường có hợp lệ hay không
  const handleSubmit = e => {
    e.preventDefault();

    // Kiểm tra các trường yêu cầu đã được điền đầy đủ
    for (let key in formData) {
      if (formData[key] === '' && key !== 'sameAddress') {
        alert(`Please fill in the ${key}`);
        return;
      }
    }

    // Logic xử lý khi form hợp lệ
    handleSetFormData(formData);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto', backgroundColor: '#f9f9f9', borderRadius: 2 }}>
      <form onSubmit={handleSubmit}>
        {/* Contact Details Section */}
        <Typography variant="h6" gutterBottom>
          Contact Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Select
              fullWidth
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              variant="outlined"
              required>
              <MenuItem value="+84">+84</MenuItem>
              {/* Add more country codes as needed */}
            </Select>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              required
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        {/* Shipping Details Section */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Shipping Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flat/House no."
                variant="outlined"
                required
                name="flatHouseNo"
                value={formData.flatHouseNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                required
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="State"
                variant="outlined"
                required
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Postal Code"
                variant="outlined"
                required
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Famous Landmark"
                variant="outlined"
                required
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>

        <Box mt={3} sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CheckoutForm;
