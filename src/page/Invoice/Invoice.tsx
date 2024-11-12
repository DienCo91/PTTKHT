import {
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Divider,
} from '@mui/material';

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
            <Typography variant="body1">{invoiceData.issued}</Typography>

            <Box mt={2}>
              <Typography variant="body2" color="text.secondary">
                Due
              </Typography>
              <Typography variant="body1">{invoiceData.due}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4} className="border-[1px] border-[#cccc] px-[14px] py-[16px] border-l-0">
          <Box>
            <Typography variant="body2" color="text.secondary">
              Billed to
            </Typography>
            <Typography variant="body1">{invoiceData.billedTo.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {invoiceData.billedTo.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {invoiceData.billedTo.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {invoiceData.billedTo.phone}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} className="border-[1px] border-[#cccc] px-[14px] py-[16px] border-x-0">
          <Box>
            <Typography variant="body2" color="text.secondary">
              From
            </Typography>
            <Typography variant="body1">{invoiceData.from.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {invoiceData.from.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {invoiceData.from.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {invoiceData.from.taxId}
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
            {invoiceData.services.map((service, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body1">{service.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </TableCell>
                <TableCell align="right">{service.qty}</TableCell>
                <TableCell align="right">${service.rate.toFixed(2)}</TableCell>
                <TableCell align="right">${service.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Totals Section */}
      <Box className="mt-4 ml-auto" style={{ maxWidth: '200px' }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="body2">Subtotal</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">
              ${invoiceData.subtotal.toFixed(2)}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2">Tax (0%)</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" align="right">
              ${invoiceData.tax.toFixed(2)}
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
              ${invoiceData.total.toFixed(2)}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box className="mt-4 p-2 bg-blue-50">
              <Typography variant="body1" color="primary" align="center">
                Amount due US$ {invoiceData.total.toFixed(2)}
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
