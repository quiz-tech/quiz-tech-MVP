import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// const mockData = [
//   {
//     id: 1,
//     created_at: null,
//     updated_at: null,
//     name: 'Python',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 2,
//     created_at: null,
//     updated_at: null,
//     name: 'Database',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 3,
//     created_at: null,
//     updated_at: null,
//     name: 'Framework',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 4,
//     created_at: null,
//     updated_at: null,
//     name: 'Network',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 5,
//     created_at: null,
//     updated_at: null,
//     name: 'OS',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 6,
//     created_at: null,
//     updated_at: null,
//     name: 'Python',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 7,
//     created_at: null,
//     updated_at: null,
//     name: 'Database',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 8,
//     created_at: null,
//     updated_at: null,
//     name: 'Framework',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 9,
//     created_at: null,
//     updated_at: null,
//     name: 'Network',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 10,
//     created_at: null,
//     updated_at: null,
//     name: 'OS',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 12,
//     created_at: null,
//     updated_at: null,
//     name: 'OS',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 13,
//     created_at: null,
//     updated_at: null,
//     name: 'OS',
//     image: null,
//     development_group: 1,
//   },
//   {
//     id: 14,
//     created_at: null,
//     updated_at: null,
//     name: 'OS',
//     image: null,
//     development_group: 1,
//   },
// ];

const chartMock = {
  correct_answer: 63,
  total_time: 81,
  quiz_passed: 9,
  attempt: 9,
};

const List = () => {
  const [quizInfo, setQuizInfo] = useState([]);
  const [totalAnswer, setTotalAnswer] = useState({
    success: '123',
    fail: '222',
  });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`http://backend.tecquiz.net:8000/questions/1/category/?format=json`)
      .then(res => res.json())
      .then(data => setQuizInfo(data));
  }, [params.id]);

  // useEffect(() => {
  //   fetch(`http://backend.tecquiz.net:8000/users/rank/?format=json`)
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // });

  useEffect(() => {
    const fail = chartMock.attempt * 10 - chartMock.correct_answer;
    setTotalAnswer(prev => ({
      ...prev,
      success: chartMock.correct_answer,
      fail: fail,
    }));
  }, []);

  const goToCard = id => {
    navigate(`/detail/${id}`);
  };

  const goToDashBoard = () => {
    navigate('/');
  };

  const data = {
    labels: ['정답 횟수', '오답 횟수'],
    datasets: [
      {
        label: '# of Votes',
        data: [totalAnswer.success, totalAnswer.fail],
        backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Title>내 기록 전체 보기</Title>
      <SubTitle>기록</SubTitle>
      <ChartWrap>
        <Doughnut data={data} />
      </ChartWrap>
      <Title>{params.id === 1 ? 'Backend Quiz' : 'Frontend Quiz'}</Title>
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
  width: 235px;
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
  margin: 50px 0;
`;
