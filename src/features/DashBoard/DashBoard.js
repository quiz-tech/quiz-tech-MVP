import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileData from './ProfileData';
import { flex } from '../../styles/Mixin';

const DashBoard = () => {
  // useEffect(() => {
  //   fetch({''}, {
  //     headers: {
  // 			Authorization:
  // 		},
  //   })
  //   .then((res) => res.json())
  //   .then((data)=>(data))
  // }, []);

  return (
    <DashboardContainer>
      <Profile>
        <ProfileImg />
        <ProfileInfo>
          <ProfileText>
            <ProfileName>Kyuhyun Ro</ProfileName>
            <ProfileNickname>노도</ProfileNickname>
          </ProfileText>
          <ProfileData />
        </ProfileInfo>
      </Profile>
      <Content>
        <Ranking>
          <RankingTitle>Ranking</RankingTitle>
          {/* <RankingPerson /> 이것도 맵핑 */}
          <RenkingPersonView>랭킹 뷰 버튼</RenkingPersonView>
        </Ranking>
        <QuizCategory>
          <QuizCategoryText>
            <QuizCategoryTitle>Featured Category</QuizCategoryTitle>
            <QuizCategoryView>카테고리 뷰</QuizCategoryView>
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
  ${flex('space-between', 'center')}
`;

const ProfileImg = styled.div`
  width: 290px;
  height: 230px;
  background: url('/images/Rectangle 278.svg') no-repeat center;
  border-radius: 30px;
`;

const ProfileInfo = styled.div`
  margin-left: 33px;
`;

const ProfileText = styled.div``;

const ProfileName = styled.span``;

const ProfileNickname = styled.div``;

const Content = styled.div``;

const Ranking = styled.div``;

const RankingTitle = styled.div``;

const RenkingPersonView = styled.div``;

const QuizCategory = styled.div``;
const QuizCategoryText = styled.div``;
const QuizCategoryTitle = styled.div``;
const QuizCategoryView = styled.div``;
