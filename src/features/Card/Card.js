import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle, NextButton } from '../List/List';
const Card = () => {
  return (
    <>
      <Title>타이틀</Title>
      <SubTitle>서브 타이틀</SubTitle>
      <QuestionCard>
        <QuestionDesc>
          <QuestionIndex>Question 1/10</QuestionIndex>
          <QuestionExplanation>
            다음중 버그를 찾거나 정적 분석을 할 수 있는 어플리케이션은?
          </QuestionExplanation>
        </QuestionDesc>
        <QuestionImage />
      </QuestionCard>

      <AnswerButtonWrapper>
        <RadioBtnBox>
          <RadioBtn type="radio" />
          <RadioBtnLabel>#1</RadioBtnLabel>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn type="radio" />
          <RadioBtnLabel>#2</RadioBtnLabel>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn type="radio" />
          <RadioBtnLabel>#3</RadioBtnLabel>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn type="radio" />
          <RadioBtnLabel>#4</RadioBtnLabel>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn type="radio" />
          <RadioBtnLabel>#5</RadioBtnLabel>
        </RadioBtnBox>
      </AnswerButtonWrapper>
      <NextButton>NEXT</NextButton>
    </>
  );
};

export default Card;

const QuestionCard = styled.div`
  display: flex;
  height: 296px;
`;

const QuestionDesc = styled.div`
  width: 50%;
`;

const QuestionIndex = styled.p`
  font-weight: 600;
  font-size: 23px;
  line-height: 34px;
  margin-top: 36px;
`;

const QuestionExplanation = styled.p`
  margin-top: 36px;
  font-size: 18px;
`;

const QuestionImage = styled.img`
  width: 503px;
  height: 296px;
  background-color: gray;
  box-shadow: 0px 15px 40px 5px #ededed;
  border-radius: 30px;
`;

const AnswerButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RadioBtnBox = styled.div``;

const RadioBtn = styled.input`
  margin-right: 28px;
`;

const RadioBtnLabel = styled.label`
  color: black;
`;
