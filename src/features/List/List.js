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
    fetch(
      `http://backend.tecquiz.net:8000/questions/${params.id}/category/?format=json`
    )
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
        backgroundColor: ['rgba(126, 206, 252, 0.2)', 'rgba(255, 77, 51, 0.2)'],
        borderColor: ['rgba(126, 206, 252, 1)', 'rgba(255, 77, 51, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <ContentWrap>
        <ContentLeft>
          <Title>내 기록 전체 보기</Title>
          <SubTitle>기록</SubTitle>
          <ChartWrap>
            <Doughnut data={data} />
          </ChartWrap>
        </ContentLeft>
        <ContentRight>
          <Title>{params.id !== '1' ? 'Frontend Quiz' : 'Backend Quiz'}</Title>
          <SubTitle>서브타이틀</SubTitle>
          <CardList>
            {quizInfo &&
              quizInfo.map(card => (
                <Card key={card.id} onClick={() => goToCard(card.id)}>
                  <CardImg src={card.image} alt={card.name} />
                </Card>
              ))}
          </CardList>
        </ContentRight>
      </ContentWrap>
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

const ContentWrap = styled.div`
  @media (max-width: 1700px) {
    display: flex;
  }
`;

const ContentLeft = styled.div`
  @media (max-width: 1700px) {
    padding-right: 50px;
    border-right: 1px solid #e9e9e9;
  }
`;

const ContentRight = styled.div`
  @media (max-width: 1700px) {
    margin-left: 50px;
    padding: 0 20px;
  }
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  max-height: 450px;
  overflow-y: auto;
  @media (max-width: 1700px) {
    max-height: 350px;
  }
`;

const Card = styled.li`
  position: relative;
  width: 250px;
  height: 200px;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 30px;
  background: #c9c9c9;
  overflow: hidden;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1700px) {
    width: 160px;
    height: 130px;
    border-radius: 20px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
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
  margin-bottom: 50px;
  @media (max-width: 1700px) {
    margin-top: 80px;
    margin-bottom: 0;
  }
`;
