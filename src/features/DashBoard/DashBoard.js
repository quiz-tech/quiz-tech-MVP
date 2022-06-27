import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { flex } from '../../styles/Mixin';
import RankingPerson from './RankingPerson';
import ProfileData from './ProfileData';
import SelectQuiz from './SelectQuiz';
// FIXME:맵핑되는 것만이 아닌 여러가지 데이터 받아와야한다 잊지 말기

const DashBoard = () => {
  const [dataItem, setDataItem] = useState([]);
  const [quizItem, setQuizItem] = useState([]);
  // useEffect(() => {
  //   fetch({''}, {
  //     headers: {
  // 			Authorization:localStorage.getItem('access-token')
  // 		},
  //   })
  //   .then((res) => res.json())
  //   .then((data)=>{
  // setDataItem(data.ProfileData);
  // setQuizItem(data.CategoryData);
  // }
  // )
  // }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/dashboardData.json')
      .then(res => res.json())
      .then(data => {
        setDataItem(data.ProfileData);
        setQuizItem(data.CategoryData);
      });
  }, []);
  console.log(dataItem);
  console.log(quizItem);

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
              dataItem.map((profileData, idx) => {
                return <ProfileData key={idx} {...profileData} />;
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
`;

const ProfileImg = styled.div`
  width: 220px;
  height: 180px;
  background: url('/images/Rectangle 278.svg') no-repeat center;
  border-radius: 30px;
`;

const ProfileInfo = styled.div`
  margin-left: 23px;
  padding: 10px;
  color: #696f79;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.span`
  font-weight: 700;
  font-size: 25px;
`;

const ProfileNickname = styled.span`
  font-size: 15px;
  margin-top: 5px;
`;

const DataChart = styled.div`
  width: 500px;
  height: 5px;
  margin-top: 20px;
  background-color: #c4c4c4;
`;

const ProfileDataContainer = styled.ul`
  display: flex;
`;

const Content = styled.div`
  ${flex('center', 'center')}
  margin-top: 50px;
`;

const Ranking = styled.div`
  margin-right: 50px;
`;

const RankingTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #696f79;
  margin-bottom: 10px;
`;

const QuizCategory = styled.div``;

const QuizCategoryTitle = styled(RankingTitle)``;

const SelectQuizContainer = styled.div`
  ${flex('center', 'center')}
  width:400px;
  height: 230px;
  border: 1px solid gray;
`;
