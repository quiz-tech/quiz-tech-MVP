import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { data } from './components/Doughnut';
const List = () => {
  const navigate = useNavigate();
  const goToDashBoard = () => {
    navigate('/');
  };
  return (
    <>
      <ChartWrap>
        <Doughnut data={data} />
      </ChartWrap>
      <Title>타이틀</Title>
      <SubTitle>서브타이틀</SubTitle>
      <CardList>
        <Card>
          <CardText>프론트</CardText>
        </Card>
        <Card>
          <CardText>백</CardText>
        </Card>
      </CardList>
      <NextButton onClick={() => goToDashBoard()}>PREV</NextButton>
    </>
  );
};

export default List;

export const Title = styled.p`
  font-size: 33px;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;

const CardList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
`;

const Card = styled.li`
  position: relative;
  width: 235px;
  height: 170px;
  padding: 20px;
  margin-right: 20px;
  border-radius: 30px;
  background: #c9c9c9;
  &:last-child {
    margin-right: 0;
  }
`;

const CardText = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 212px;
  height: 65px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  background: #8692a6;
  border-radius: 27px;
`;

const ChartWrap = styled.div`
  width: 300px;
  height: 300px;
`;
