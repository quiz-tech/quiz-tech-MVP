import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { flex } from '../../styles/Mixin';
import ProfileData from './ProfileData';
import SelectQuiz from './SelectQuiz';
import { useSelector, useDispatch } from 'react-redux';
import { userProfileUpdate, profileDataUpdate } from './userDataSlice';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DashBoard = () => {
  const [dataItem, setDataItem] = useState([]);
  const [quizItem, setQuizItem] = useState([]);
  const [dashboardData, setDashboardData] = useState({});

  const dispatch = useDispatch();

  const userData = useSelector(state => state.userData);

  // useEffect(() => {
  //   fetch('https://backend.tecquiz.net/users/profile/', {
  //     headers: {
  //       access: localStorage.getItem('access'),
  //       refresh: localStorage.getItem('refresh'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setDashboardData(data[0]);
  //       dispatch(userProfileUpdate(data[0]));
  //       dispatch(profileDataUpdate(data[0].rank_set[0]));
  //     });
  // }, []);

  const passChart =
    userData.resultData.attempt === 0
      ? {
          labels: ['Attempt', 'Passed'],
          datasets: [
            {
              data: [1],
              backgroundColor: ['rgba(153, 153, 153, 0.7)'],
              borderColor: ['rgba(255, 255, 255, 1)'],
              borderWidth: 2,
            },
          ],
        }
      : {
          datasets: [
            {
              labels: ['Attempt', 'Passed'],
              data: [
                userData.resultData.attempt,
                userData.resultData.quiz_passed,
              ],
              backgroundColor: [
                'rgba(153, 153, 153, 0.7)',
                'rgba(102, 102, 102, 0.7)',
              ],
              borderColor: ['rgba(255, 255, 255, 1)'],
              borderWidth: 2,
            },
          ],
        };

  const correctChart =
    userData.resultData.attempt === 0
      ? {
          labels: ['Correct', 'Incorrect'],
          datasets: [
            {
              data: [1],
              backgroundColor: ['rgba(102, 102, 102, 0.7)'],
              borderColor: ['rgba(255, 255, 255, 1)'],
              borderWidth: 2,
            },
          ],
        }
      : {
          labels: ['Correct', 'Incorrect'],
          datasets: [
            {
              label: 'resultData',
              data: [
                userData.resultData.correct_answer,
                userData.resultData.attempt * 10 -
                  userData.resultData.correct_answer,
              ],
              backgroundColor: [
                'rgba(153, 153, 153, 0.7)',
                'rgba(102, 102, 102, 0.7)',
              ],
              borderColor: ['rgba(255, 255, 255, 1)'],
              borderWidth: 2,
            },
          ],
        };

  const DASHBOARDDATA = {
    ProfileData: [
      {
        id: 1,
        dataImg: '/images/quizpass.svg',
        dataName: 'Quiz Passed',
        dataResult: userData.resultData.quiz_passed,
      },
      {
        id: 2,
        dataImg: '/images/fastest.svg',
        dataName: 'Fastest Time',
        dataResult: userData.resultData.total_time,
      },
      {
        id: 3,
        dataImg: '/images/correct.svg',
        dataName: 'Correct Answers',
        dataResult: userData.resultData.correct_answer,
      },
    ],
    CategoryData: [
      {
        id: 1,
        CategoryImg: '/images/selectQuiz/backimg.png',
        CategoryName: 'Back-end',
      },
      {
        id: 2,
        CategoryImg: '/images/selectQuiz/frontimg.png',
        CategoryName: 'Front-end',
      },
    ],
  };

  return (
    <DashboardContainer>
      <Profile>
        <ProfileImgWrap>
          <ProfileImg />
        </ProfileImgWrap>
        <ProfileInfo>
          <ProfileText>
            <ProfileName>{dashboardData.username}</ProfileName>
            <ProfileEmail>{dashboardData.email}</ProfileEmail>
          </ProfileText>
          <DataChart />
          <ProfileDataContainer>
            {DASHBOARDDATA.ProfileData &&
              DASHBOARDDATA.ProfileData.map(profileData => {
                return <ProfileData key={profileData.id} {...profileData} />;
              })}
          </ProfileDataContainer>
          {/* <ProfileData /> */}
        </ProfileInfo>
      </Profile>
      <Content>
        <Ranking>
          <RankingTitle>Data chart</RankingTitle>
          <RankingPerson>
            <ChartWrap>
              <Doughnut data={passChart} />
              <Doughnut data={correctChart} />
            </ChartWrap>
          </RankingPerson>
          {/* <RenkingPersonView>랭킹 뷰 버튼</RenkingPersonView> */}
        </Ranking>
        <QuizCategory>
          <QuizCategoryTitle>Featured Category</QuizCategoryTitle>
          {/* <QuizCategoryView>카테고리 뷰</QuizCategoryView> */}
          {/* <QuizCategorySelect /> */}
          <SelectQuizContainer>
            {DASHBOARDDATA.CategoryData &&
              DASHBOARDDATA.CategoryData.map(quizData => {
                return <SelectQuiz key={quizData.id} {...quizData} />;
              })}
          </SelectQuizContainer>
          {/* <SelectQuiz /> */}
        </QuizCategory>
      </Content>
    </DashboardContainer>
  );
};

export default DashBoard;

const DashboardContainer = styled.div`
  padding: 30px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImgWrap = styled.div`
  width: 280px;
  height: 220px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 5px 5px 3px darkgray;
`;

const ProfileImg = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/Rectangle 278.svg') no-repeat center;
`;

const ProfileInfo = styled.div`
  margin-left: 60px;
  color: #696f79;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.span`
  font-weight: 700;
  font-size: 30px;
`;

const ProfileEmail = styled.span`
  font-size: 18px;
  margin-top: 8px;
`;

const DataChart = styled.div`
  width: 600px;
  height: 5px;
  margin-top: 25px;
  background-color: #c4c4c4;
  border-radius: 50px;
`;
const ProfileDataContainer = styled.ul`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  margin-top: 80px;
  @media (min-width: 1793px) {
    margin-top: 100px;
  }
`;

const Ranking = styled.div`
  width: 350px;
`;

const RankingTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #696f79;
  margin-bottom: 15px;
`;

const ChartWrap = styled.div`
  display: flex;
  width: 175px;
  margin-top: 50px;
  @media (min-width: 1793px) {
    width: 260px;
  }
`;

const RankingPerson = styled.div`
  /* width: 470px; */
  height: 255px;
  /* border-radius: 30px;
  box-shadow: 3px 3px 3px lightgray; */
`;

const QuizCategory = styled.div`
  margin-left: 80px;
`;

const QuizCategoryTitle = styled(RankingTitle)``;

const SelectQuizContainer = styled.div`
  ${flex('space-between', 'center')}
  width: 530px;
  height: 255px;
  @media (min-width: 1793px) {
  }
`;
