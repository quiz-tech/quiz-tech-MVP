import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';
import { useDispatch } from 'react-redux';

const mock = {
  time: '2022-06-21T23:53:25.545557Z',
};

const Detail = () => {
  const [info, setInfo] = useState();
  const [data, setData] = useState(mock);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://backend.tecquiz.net/questions/category/${params.id}/`)
      .then(res => res.json())
      .then(data => setInfo(data));
  }, [params.id]);

  const createQuizDay = data.time.slice(0, 10);

  const goToQuiz = () => {
    navigate(`/card/${info.id}`);
  };

  return (
    <>
      <Title>
        {info && info.development_group === 1 ? 'Backend' : 'Frontend'}
      </Title>
      <ContentWrap>
        <ThumbnailWrap>
          <Thumbnail src={info && info.image} />
        </ThumbnailWrap>
        <ThumbnailInfo>
          <Info>
            <InfoTitle>Date</InfoTitle>
            <InfoText>{createQuizDay}</InfoText>
          </Info>
          <Info>
            <InfoTitle>Time Limit</InfoTitle>
            <InfoText>10 MIN</InfoText>
          </Info>
          <Info>
            <InfoTitle>Quiz Account</InfoTitle>
            <InfoText>10</InfoText>
          </Info>
        </ThumbnailInfo>
      </ContentWrap>
      <IntroTitle>Instructions</IntroTitle>
      <IntroText>
        <TextBold>[{info && info.name}]</TextBold> 퀴즈입니다 랜덤한 문제중
        10문제가 나옵니다. 문제 수정사항이나 문의 사항 있다면 우측의 support
        항목을 이용해 주세요
      </IntroText>
      <NextButton onClick={() => goToQuiz()}>Start</NextButton>
    </>
  );
};

export default Detail;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ThumbnailWrap = styled.div`
  width: 500px;
  height: 365px;
  margin-right: 50px;
  border-radius: 30px;
  background: #c9c9c9;
  overflow: hidden;
  @media (max-width: 1792px) {
    width: 300px;
    height: 240px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const ThumbnailInfo = styled.ul``;
const Info = styled.li`
  display: flex;
  min-width: 400px;
  font-size: 23px;
  margin-bottom: 30px;
`;

const InfoTitle = styled.span`
  font-weight: 700;
  &:after {
    content: ':';
    margin: 0 20px;
  }
`;
const InfoText = styled.span`
  font-weight: 400;
`;

const IntroTitle = styled.div`
  font-size: 23px;
  margin-top: 30px;
`;

const TextBold = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const IntroText = styled.div`
  margin-top: 100px;
  @media (max-width: 1792px) {
    margin-top: 50px;
  }
`;
