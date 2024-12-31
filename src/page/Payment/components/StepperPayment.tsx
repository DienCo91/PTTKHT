import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import CheckoutForm, { FormData } from './CheckoutForm';
import DeliveryOptions from './DeliveryOptions';
import PaymentMethods from './PaymentMethods';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setProducts } from '@/feature/card/cardSlice';
import { User } from '@/feature/user/userSlice';
import { getAllUser, getNotice, getProductAll, setNotice, setProductAll, setUser } from '@/util/data';
import { filterProducts } from '@/util/util';

const steps = ['Shipping', 'Delivery', 'Payment'];
const StepperPayment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [isBill, setIsBill] = React.useState(false);

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
    feeShipping: '',
  });

  const feeShipping = useSelector((state: RootState) => state.card.feeShip);
  const listProducts = useSelector((state: RootState) => state.card.listProducts);
  const user = useSelector((state: RootState) => state.user.user);

  const generateIdFromDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    return `VN-${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
  };

  const formatDateToYYYYMMDD = () => {
    const date = new Date();
    const year = date.getFullYear(); // Lấy năm
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleViewInvoice = () => {
    const users = getAllUser();
    const products = getProductAll();
    if (users) {
      const notices = getNotice();

      const updatedUsers = (users as User[]).map(u =>
        user?.name === u.name
          ? {
              ...u,
              card: [],
            }
          : u,
      );
      setUser(updatedUsers);
      const notice = {
        id: generateIdFromDateTime(),
        name: generateIdFromDateTime(),
        status: 'Pending',
        date: formatDateToYYYYMMDD(),
        color: 'warning',
        userName: user?.name || '',
        isBill: isBill,
        ...formData,
        feeShipping,
        listProducts,
      };
      setNotice([notice, ...notices]);
      dispatch(setProducts([]));
      const newProducts = filterProducts(products, listProducts);

      setProductAll(newProducts);

      setTimeout(() => {
        navigate('/invoice', {
          state: {
            data: { ...notice },
          },
        });
      }, 500);
    }
  };

  const handleSetFormData = (data: FormData) => {
    setFormData(data);
    setActiveStep(1);
  };

  const ActiveStep = useMemo(() => {
    if (activeStep === 0) return <CheckoutForm handleSetFormData={handleSetFormData} />;

    if (activeStep === 1) return <DeliveryOptions />;

    if (activeStep === 2) return <PaymentMethods setIsBill={setIsBill} />;

    return <></>;
  }, [activeStep, setIsBill]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, ml: 2 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleViewInvoice}>View Invoice</Button>
          </Box>
        </React.Fragment>
      ) : (
        <div className="mt-[20px]">
          {ActiveStep}
          {!!activeStep && (
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
            </Box>
          )}
        </div>
      )}
    </Box>
  );
};

export default StepperPayment;
