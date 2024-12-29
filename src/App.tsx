import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigate from './Component/Navigate/Navigate';
import Home from './page/Home/Home';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DetailItem from './page/DetailItem';
import Payment from './page/Payment/Payment';
import Invoice from './page/Invoice/Invoice';
import Login from './page/Login';
import { useEffect } from 'react';
import { data, getAllUser, setProductAll, setUser } from './util/data';
import { Product } from './util/types';
import ListProduct from './page/ListProduct/ListProduct';

function App() {
  useEffect(() => {
    const user = getAllUser();
    setProductAll(data as Product[]);
    const index = user.findIndex(user => user.role === 'admin');
    if (index < 0) {
      setUser([
        ...user,
        {
          name: 'admin',
          email: 'admin@gmail.com',
          password: 'admin',
          confirmPassword: 'admin',
          phone: '0966604175',
          role: 'admin',
        },
      ]);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id?" element={<DetailItem />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
