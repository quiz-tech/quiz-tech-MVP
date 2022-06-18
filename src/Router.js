import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import DashBoard from './features/DashBoard/DashBoard';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
