import { Typography } from '@mui/material';
import StepperPayment from './components/StepperPayment';
import CartItem from './components/CartItem';
import SummarySection from './components/SummarySection';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const data = location.state;
  const products = data.data;
  const feeShipping = useSelector((state: RootState) => state.card.feeShip);

  const total = products.reduce((sum, item) => {
    const numericValue = Number(item.productPrice.replace(/\./g, '').replace(' VND', ''));
    return sum + numericValue * item.quantity;
  }, 0);

  const formattedTotal =
    new Intl.NumberFormat('vi-VN').format(total + Number(feeShipping.replace(/\./g, '').replace(' VND', ''))) + ' VND';

  const priceProduct = new Intl.NumberFormat('vi-VN').format(total).replace(' VND', '') + ' VND';

  return (
    <div className="flex justify-center mt-[120px] mb-[20px]">
      <div className="w-[80%] flex justify-between">
        <div className="flex flex-1  mr-[240px] flex-col">
          <Typography fontWeight={'500'} fontSize={24}>
            Order Summary
          </Typography>
          {products.length > 0 && products.map(product => <CartItem key={product.productID} item={product} />)}
          <SummarySection total={formattedTotal} feeShipping={feeShipping} priceProduct={priceProduct} />
        </div>
        <div className="flex flex-1">
          <StepperPayment />
        </div>
      </div>
    </div>
  );
};

export default Payment;
