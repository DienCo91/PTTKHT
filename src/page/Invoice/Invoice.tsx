import { RootState } from '@/app/store';
import {
  Box,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Invoice = () => {
  const invoiceData = {
    issued: '01 Aug, 2023',
    due: '15 Aug, 2023',
    billedTo: {
      name: 'Company Name',
      address: 'Company address',
      location: 'City, Country - 00000',
      phone: '+0 (000) 123-4567',
    },
    from: {
      name: 'Panda, Inc',
      address: 'Business address',
      location: 'City, State, IN - 000 000',
      taxId: 'TAX ID 00XXXXX1234X0XX',
    },
    services: [
      {
        name: 'Service name',
        description: 'Description • Hours log',
        qty: 2,
        rate: 100.0,
        total: 200.0,
      },
      {
        name: 'Service name',
        description: 'Description',
        qty: 2,
        rate: 100.0,
        total: 200.0,
      },
    ],
    subtotal: 400.0,
    tax: 0.0,
    total: 400.0,
  };

  const feeShipping = useSelector((state: RootState) => state.card.feeShip);

  const fee = useMemo(() => {
    if (!feeShipping) return 7;
    if (feeShipping === '40.000 VND') return 4;
    return 1;
  }, []);

  const location = useLocation();
  const data = location.state;
  const bill = data.data;

  const addDaysToDate = (baseDate, daysToAdd) => {
    const newDate = new Date(baseDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  };

  const formatDate = date => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const total = bill.listProducts.reduce((sum, item) => {
    const numericValue = Number(item.productPrice.replace(/\./g, '').replace(' VND', ''));
    return sum + numericValue * item.quantity;
  }, 0);

  const formattedTotal =
    new Intl.NumberFormat('vi-VN').format(total + Number(feeShipping.replace(/\./g, '').replace(' VND', ''))) + ' VND';

  const priceProduct = new Intl.NumberFormat('vi-VN').format(total).replace(' VND', '') + ' VND';

  return (
    <Paper className="w-[80%]  mx-auto p-8 bg-gray-50 mt-[120px] mb-[40px]">
      <Typography fontSize={32} fontWeight={600} marginBottom={4}>
        Invoice
      </Typography>
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
            <Typography variant="body1">{bill.firstName + ' ' + bill.lastName}</Typography>
            <Typography variant="body2" color="text.secondary">
              {bill.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {bill.city + ',' + bill.state}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {bill.phoneNumber}
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
            {bill.listProducts.map((service, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body1">{service.productName}</Typography>
                </TableCell>
                <TableCell align="right">{service.qty}</TableCell>
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
      <Typography fontSize={14} color="#878787cc">
        Please pay within 15 days of receiving this invoice.
      </Typography>
    </Paper>
  );
};

export default Invoice;
