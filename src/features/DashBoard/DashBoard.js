import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { flex } from '../../styles/Mixin';
import RankingPerson from './RankingPerson';
import ProfileData from './ProfileData';
import SelectQuiz from './SelectQuiz';
// FIXME:맵핑되는 것만이 아닌 여러가지 데이터 받아와야한다 잊지 말기
import { useSelector, useDispatch } from 'react-redux';
import { userDataUpdate } from './userDataSlice';

const DashBoard = () => {
  const [dataItem, setDataItem] = useState([]);
  const [quizItem, setQuizItem] = useState([]);

  const [dashboardData, setDashboardData] = useState({});
  const [userProfileData, setUserProfileData] = useState({});

  const dispatch = useDispatch();
  const uerData = useSelector(state => state.answers);

  useEffect(() => {
    dispatch(userDataUpdate(dashboardData));
  }, [dashboardData, dispatch]);

  useEffect(() => {
    fetch('/data/dashboardData.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDataItem(data.ProfileData);
        setQuizItem(data.CategoryData);
      });
  }, []);
  // console.log(dataItem);
  // console.log(quizItem);

  useEffect(() => {
    fetch(
      'https://cors-anywhere.herokuapp.com/http://backend.tecquiz.net:8000/users/profile/',
      // FIX ME: 배포 되어 있는 프록시 서버를 이용하여 우회 통신 성공
      // 'http://backend.tecquiz.net:8000/users/profile/',
      {
        // mode: 'no-cors',
        headers: {
          // Access-Control-Allow-Credentials: true,
          access: localStorage.getItem('access'),
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        // console.log(data[0].rank_set[0]);
        setDashboardData(data[0]);
        setUserProfileData(data[0].rank_set[0]);
        userDataUpdate(data[0].rank_set[0]);
      });
  }, []);

  console.log(userProfileData);
  console.log(dashboardData);
  console.log(userDataUpdate);
  // FIX ME: 여기에 있는 아이들도 props 로 전달되어야 하기에 한번 스토어에 저장?

  return (
    <DashboardContainer>
      <Profile>
        <ProfileImg />
        <ProfileInfo>
          <ProfileText>
            <ProfileName>Kyuhyun Ro</ProfileName>
            <ProfileNickname>노도</ProfileNickname>
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
          <RankingTitle>Ranking</RankingTitle>
          <RankingPerson />
          {/* <RenkingPersonView>랭킹 뷰 버튼</RenkingPersonView> */}
        </Ranking>
        <QuizCategory>
          <QuizCategoryTitle>Featured Category</QuizCategoryTitle>
          {/* <QuizCategoryView>카테고리 뷰</QuizCategoryView> */}
          {/* <QuizCategorySelect /> 이것도 맵핑 */}
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

const ProfileImg = styled.div`
  width: 280px;
  height: 220px;
  background: url('/images/Rectangle 278.svg') no-repeat center;
  border-radius: 25px;
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

const ProfileNickname = styled.span`
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
  ${flex('space-between', 'center')}
  margin-top: 50px;
`;

const Ranking = styled.div``;

const RankingTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #696f79;
  margin-bottom: 15px;
`;

const QuizCategory = styled.div``;

const QuizCategoryTitle = styled(RankingTitle)``;

const SelectQuizContainer = styled.div`
  ${flex('space-around', 'center')}
  width:470px;
  height: 255px;
  border: 1px solid lightgray;
  border-radius: 30px;
`;
