import { Typography } from '@mui/material';
import StepperPayment from './components/StepperPayment';
import CartItem from './components/CartItem';
import SummarySection from './components/SummarySection';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

const Payment = () => {
  const products = useSelector((state: RootState) => state.card.listProducts);
  return (
    <div className="flex justify-center mt-[120px] mb-[20px]">
      <div className="w-[80%] flex justify-between">
        <div className="flex flex-1  mr-[240px] flex-col">
          <Typography>Order Summary</Typography>
          {products.length > 0 && products.map(product => <CartItem item={product} />)}
          <SummarySection />
        </div>
        <div className="flex flex-1">
          <StepperPayment />
        </div>
      </div>
    </div>
  );
};

export default Payment;
