import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { data } from './components/Doughnut';

const mockData = [
  {
    id: 1,
    created_at: null,
    updated_at: null,
    name: 'Python',
    image: null,
    development_group: 1,
  },
  {
    id: 2,
    created_at: null,
    updated_at: null,
    name: 'Database',
    image: null,
    development_group: 1,
  },
  {
    id: 3,
    created_at: null,
    updated_at: null,
    name: 'Framework',
    image: null,
    development_group: 1,
  },
  {
    id: 4,
    created_at: null,
    updated_at: null,
    name: 'Network',
    image: null,
    development_group: 1,
  },
  {
    id: 5,
    created_at: null,
    updated_at: null,
    name: 'OS',
    image: null,
    development_group: 1,
  },
];

const List = () => {
  const navigate = useNavigate();
  const goToDashBoard = () => {
    navigate('/');
  };
  const [quizInfo, setQuizInfo] = useState(mockData);
  const params = useParams();

  // useEffect(() => {
  //   fetch(`http://13.209.49.51:8000/questions/{params.id}/category/?format=json`)
  //     .then(res => res.json())
  //     .then(data => setQuizInfo(data));
  // }, []);

  const goToCard = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <ChartWrap>
        <Doughnut data={data} />
      </ChartWrap>
      <Title>타이틀</Title>
      <SubTitle>서브타이틀</SubTitle>
      <CardList>
        {quizInfo &&
          quizInfo.map(card => (
            <Card key={card.id} onClick={() => goToCard(card.id)}>
              <CardText>{card.name}</CardText>
            </Card>
          ))}
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
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Card = styled.li`
  position: relative;
  width: calc(100% / 4 - 60px);
  height: 170px;
  padding: 20px;
  margin-bottom: 20px;
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
  position: fixed;
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
