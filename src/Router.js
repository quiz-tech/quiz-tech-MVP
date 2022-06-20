import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './features/Login/Login';
import MainRouter from './features/MainRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainRouter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
