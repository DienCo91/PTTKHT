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
import { data, setProductAll } from './util/data';

function App() {
  useEffect(() => {
    setProductAll(data);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id?" element={<DetailItem />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
