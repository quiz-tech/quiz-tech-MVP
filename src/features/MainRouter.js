import { Routes, Route } from 'react-router-dom';
import Aside from '../components/Aside';
import ContentsWrapper from '../components/ContentsWrapper';
import MainContainer from '../components/MainContainer';
import Nav from '../components/Nav';
import DashBoard from './DashBoard/DashBoard';
import Card from './Card/Card';
import Detail from './Detail/Detail';
import List from './List/List';
import Result from './Result/Result';

const MainRouter = () => {
  return (
    <>
      <Nav />
      <MainContainer>
        <Aside />
        <ContentsWrapper>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/card" element={<Card />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/list" element={<List />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </ContentsWrapper>
      </MainContainer>
    </>
  );
};

export default MainRouter;