import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileData from './ProfileData';
import { flex } from '../../styles/Mixin';

// FIXME:맵핑되는 것만이 아닌 여러가지 데이터 받아와야한다 잊지 말기

const DashBoard = () => {
  const [dataItem, setDataItem] = useState([]);
  // useEffect(() => {
  //   fetch({''}, {
  //     headers: {
  // 			Authorization:
  // 		},
  //   })
  //   .then((res) => res.json())
  //   .then((data)=>(data))
  // }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/dashboardData.json')
      .then(res => res.json())
      .then(data => setDataItem(data.ProfileData));
  }, []);
  console.log(dataItem);

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
          {/* <RankingPerson /> 이것도 맵핑 */}
          {/* <RenkingPersonView>랭킹 뷰 버튼</RenkingPersonView> */}
        </Ranking>
        <QuizCategory>
          <QuizCategoryText>
            <QuizCategoryTitle>Featured Category</QuizCategoryTitle>
            {/* <QuizCategoryView>카테고리 뷰</QuizCategoryView> */}
          </QuizCategoryText>
          {/* <QuizCategorySelect /> 이것도 맵핑 */}
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
  /* ${flex('space-between', 'center')} */
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

const Content = styled.div``;

const Ranking = styled.div``;

const RankingTitle = styled.div``;

const RenkingPersonView = styled.div``;

const QuizCategory = styled.div``;
const QuizCategoryText = styled.div``;
const QuizCategoryTitle = styled.div``;
const QuizCategoryView = styled.div``;
