import { RootState } from '@/app/store';
import imgPaid from '@/assets/img/paid.png';
import { INotice } from '@/feature/user/userSlice';
import { getNotice, setNotice } from '@/util/data';
import { Product } from '@/util/types';
import { getChipStyles } from '@/util/util';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Invoice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const billPayload = data.data as INotice;
  const feeShipping = billPayload.feeShipping;
  const user = useSelector((u: RootState) => u.user.user);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [bill, setBill] = useState<INotice | null>(null);

  useEffect(() => {
    const notice = getNotice().find(notice => notice.id === billPayload.id);
    if (notice) {
      setBill(notice);
    }
  }, [isEdit, billPayload]);

  const fee = useMemo(() => {
    if (!feeShipping) return 7;
    if (feeShipping === '40.000 VND') return 4;
    return 1;
  }, []);

  const addDaysToDate = (baseDate: Date, daysToAdd: number) => {
    const newDate = new Date(baseDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const total = bill?.listProducts?.reduce((sum: number, item: Product) => {
    const numericValue = Number(item.productPrice.replace(/\./g, '').replace(' VND', ''));
    return sum + numericValue * item.quantity;
  }, 0);

  const formattedTotal =
    new Intl.NumberFormat('vi-VN').format(total || 0 + Number(feeShipping?.replace(/\./g, '').replace(' VND', ''))) +
    ' VND';

  const priceProduct = new Intl.NumberFormat('vi-VN').format(total || 0).replace(' VND', '') + ' VND';

  const handleCancelOrder = () => {
    const notices = getNotice();
    setNotice(notices.filter(n => n.id !== bill?.id));
    navigate('/');
    toast.success('Order cancelled');
  };

  const getColor = (status: string) => {
    if (status === 'Pending') return 'warning';

    if (status === 'Shipping') return 'primary';
    if (status === 'Finished') return 'success';
    return '';
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedValue = formData.get('radio-buttons-group') || '';
    const notices = getNotice();
    const newNotices = notices.map(notification => {
      if (notification.id === bill?.id) {
        const color = getColor(selectedValue as string);
        return { ...notification, color, status: selectedValue as string };
      }
      return notification;
    });
    setNotice(newNotices);
    setIsEdit(false);
    toast.success('Edit Notification Success');
  };

  if (!bill) return <></>;

  return (
    <Paper className="w-[80%]  mx-auto p-8 bg-gray-50 mt-[120px] mb-[40px] relative">
      {bill.status === 'Pending' && (
        <div className="absolute right-8 bottom-8">
          <Button color="error" variant="contained" onClick={handleCancelOrder}>
            Cancel order
          </Button>
        </div>
      )}
      <Typography fontSize={32} fontWeight={600} marginBottom={4}>
        {bill.isBill || bill.status === 'Finished' ? 'Bill' : 'Invoice'}
      </Typography>
      {!isEdit ? (
        <Typography fontSize={20} fontWeight={500} color="text.secondary" marginY={1}>
          Status : <Chip label={bill.status} size="small" sx={getChipStyles(bill.color)} />
          {user?.role === 'admin' && (
            <IconButton sx={{ marginLeft: 2 }} onClick={() => setIsEdit(true)}>
              <EditIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
          )}
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group">
              <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
              <FormControlLabel value="Shipping" control={<Radio />} label="Shipping" />
              <FormControlLabel value="Finished" control={<Radio />} label="Finished" />
            </RadioGroup>
            <Button sx={{ marginY: 2 }} variant="contained" type="submit">
              Apply
            </Button>
          </FormControl>
        </form>
      )}

      {/* Header Section */}
      <Grid container>
        <Grid item xs={4} className="border-[1px] border-[#cccc] px-[14px] py-[16px] border-l-0">
          <Box>
            <Typography variant="body2" color="text.secondary">
              Issued
            </Typography>
            <Typography variant="body1">{formatDate(new Date())}</Typography>

            <Box mt={2}>
              <Typography variant="body2" color="text.secondary">
                Due
              </Typography>
              <Typography variant="body1">{formatDate(addDaysToDate(new Date(), fee))}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} className="border-[1px] border-[#cccc] px-[14px] py-[16px] border-l-0">
          <Box>
            <Typography variant="body2" color="text.secondary">
              Billed to
            </Typography>
            <Typography variant="body1">{bill?.firstName + ' ' + bill?.lastName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {bill?.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {bill?.city + ', ' + bill?.state}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {bill?.phoneNumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className="border-[1px] border-[#cccc] px-[14px] py-[16px] border-x-0">
          <Box>
            <Typography variant="body2" color="text.secondary">
              From
            </Typography>
            <Typography variant="body1">{'Urban Vibe Service'}</Typography>
            <Typography variant="body2" color="text.secondary">
              {'US'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {'New York City'}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Services Table */}
      <TableContainer className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">Line total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(bill.listProducts as Product[]).map((service, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body1">{service.productName}</Typography>
                </TableCell>
                <TableCell align="right">{service.quantity}</TableCell>
                <TableCell align="right">{service.productPrice}</TableCell>
                <TableCell align="right">{service.productPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Totals Section */}
      <Box className="mt-4 ml-auto" style={{ maxWidth: '300px' }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2">Subtotal</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">
              {priceProduct}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">Shipping Fee</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">
              {feeShipping}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider className="my-2" />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" align="right">
              {formattedTotal}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box className="mt-4 p-2 bg-blue-50">
              <Typography variant="body1" color="primary" align="center">
                Amount due {formattedTotal}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography fontWeight={'600'} fontSize={16} marginTop={20}>
        Thank you for the business!
      </Typography>
      {!bill.isBill && (
        <Typography fontSize={14} color="#878787cc">
          Please pay within 15 days of receiving this invoice.
        </Typography>
      )}
      {(bill.isBill || bill.status === 'Finished') && (
        <img src={imgPaid} width={200} height={200} className="absolute right-0 top-0" />
      )}
    </Paper>
  );
};

export default Invoice;
