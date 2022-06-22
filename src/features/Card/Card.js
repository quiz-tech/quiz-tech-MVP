import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';

const Card = () => {
  const [answer, setAnswer] = useState('');

  const handleBtnAnswer = e => {
    const { value } = e.target;
    setAnswer(value);
  };
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
          <RadioBtn
            type="radio"
            value="1"
            checked={answer === '1'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="2"
            checked={answer === '2'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="3"
            checked={answer === '3'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="4"
            checked={answer === '4'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="5"
            checked={answer === '5'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
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
  margin-top: 80px;
`;

const RadioBtnBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const RadioBtnLabel = styled.label`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border: 4px solid black;
  border-radius: 50%;
`;

const RadioBtn = styled.input`
  opacity: 0;
  z-index: 1;
  width: 24px;
  height: 24px;
  margin: 0;
  cursor: pointer;

  &:hover ~ ${RadioBtnLabel} {
    &::after {
      content: '';
      display: block;
      margin-left: 4px;
      margin-top: 4px;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background: gray;
    }
  }
  ${props =>
    props.checked &&
    css`
      &:checked + ${RadioBtnLabel} {
        background: #fff;
        border: 4px solid black;
        &::after {
          content: '';
          display: block;
          margin-left: 4px;
          margin-top: 4px;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          background: #000;
        }
      }
    `}
`;
