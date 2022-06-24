import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';

const Detail = () => {
  return (
    <>
      <Title>타이틀</Title>
      <SubTitle>서브타이틀</SubTitle>
      <ContentWrap>
        <ThumbnailWrap>
          <Thumbnail />
        </ThumbnailWrap>
        <ThumbnailInfo>
          <Info>
            <InfoTitle>Date</InfoTitle>
            <InfoText>2022/08/17</InfoText>
          </Info>
          <Info>
            <InfoTitle>Time Limit</InfoTitle>
            <InfoText>2022/08/17</InfoText>
          </Info>
          <Info>
            <InfoTitle>Attempts</InfoTitle>
            <InfoText>클릭/시도 횟수</InfoText>
          </Info>
        </ThumbnailInfo>
      </ContentWrap>

      <IntroTitle>Instructions</IntroTitle>
      <IntroText>
        [카테고리] 별 퀴즈입니다 랜덤한 문제중 10문제가 나옵니다. 문제
        수정사항이나 문의 사항 있다면 우측의 support 항목을 이용해 주세요
      </IntroText>

      <NextButton>Start</NextButton>
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
const IntroText = styled.div`
  margin-top: 100px;
`;
