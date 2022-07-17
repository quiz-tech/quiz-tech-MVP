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

  useEffect(() => {
    fetch('/data/dashboardData.json')
      .then(res => res.json())
      .then(data => {
        setDataItem(data.ProfileData);
        setQuizItem(data.CategoryData);
      });
  }, []);

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

  const chartData = {
    // type: 'bar',
    // data: {
    //   labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    //   datasets: [
    //     {
    //       label: "Population (millions)",
    //       backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    //       data: [2478,5267,734,784,433]
    //     }
    //   ]
    // },
    // options: {
    //   legend: { display: false },
    //   title: {
    //     display: true,
    //     text: 'Predicted world population (millions) in 2050'
    //   }
    // }
    // FIX ME: 위에 값이 바 차트

    labels: ['Quiz passed', 'Total time', 'Correct answer'],
    datasets: [
      {
        label: 'resultData',
        data: [
          userData.resultData.quiz_passed,
          userData.resultData.total_time,
          userData.resultData.correct_answer,
        ],
        backgroundColor: [
          'rgba(126, 206, 252, 0.2)',
          'rgba(255, 77, 51, 0.2)',
          'rgba(200, 11, 50, 2)',
        ],
        borderColor: [
          'rgba(126, 206, 252, 1)',
          'rgba(255, 77, 51, 1)',
          'rgba(200, 11, 51, 1)',
        ],
        borderWidth: 1,
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
            {dataItem &&
              dataItem.map(profileData => {
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
              <Doughnut data={chartData} />
            </ChartWrap>
          </RankingPerson>
          {/* <RenkingPersonView>랭킹 뷰 버튼</RenkingPersonView> */}
        </Ranking>
        <QuizCategory>
          <QuizCategoryTitle>Featured Category</QuizCategoryTitle>
          {/* <QuizCategoryView>카테고리 뷰</QuizCategoryView> */}
          {/* <QuizCategorySelect /> */}
          <SelectQuizContainer>
            {quizItem &&
              quizItem.map(quizData => {
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
  margin-top: 40px;
  @media (min-width: 1793px) {
    margin-top: 100px;
  }
`;

const Ranking = styled.div`
  width: 280px;
`;

const RankingPerson = styled.div`
  /* width: 470px; */
  height: 255px;
  /* border-radius: 30px;
  box-shadow: 3px 3px 3px lightgray; */
`;

const RankingTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #696f79;
  margin-bottom: 15px;
`;

const QuizCategory = styled.div`
  margin-left: 60px;
`;

const QuizCategoryTitle = styled(RankingTitle)``;

const SelectQuizContainer = styled.div`
  ${flex('space-around', 'center')}
  width:470px;
  height: 255px;
  @media (min-width: 1793px) {
  }
`;

const ChartWrap = styled.div`
  display: flex;
  width: 220px;
  @media (min-width: 1793px) {
    width: 260px;
  }
`;
