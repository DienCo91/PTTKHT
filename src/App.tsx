import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navigate from './Component/Navigate/Navigate';
import Home from './page/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
