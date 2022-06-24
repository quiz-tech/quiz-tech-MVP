import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';

const Card = () => {
  const [answer, setAnswer] = useState('');
  const [questionData, setQuestionData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleBtnAnswer = e => {
    const { value } = e.target;
    setAnswer(value);
  };

  const handleQuestionIndex = () => {
    if (questionIndex < 9) {
      setQuestionIndex(prev => prev + 1);
      setAnswer('');
    }
  };

  const handleSubmitBtn = () => {
    if (questionIndex === 9) {
      console.log('결과 제출');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/cardData.json')
      .then(res => res.json())
      .then(res => {
        setQuestionData(res.content);
      });
  }, []);

  return (
    <>
      <Title>타이틀</Title>
      <SubTitle>서브 타이틀</SubTitle>
      <QuestionCard>
        <QuestionDesc>
          <QuestionIndex>{`Question ${questionIndex + 1}/10`}</QuestionIndex>
          <QuestionExplanation>
            {questionData[questionIndex]?.question}
          </QuestionExplanation>
        </QuestionDesc>
        <Timer>Timer: 10:00</Timer>
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
          <AnswerOptionText>
            {questionData[questionIndex]?.asnwer[0].answer_content}
          </AnswerOptionText>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="2"
            checked={answer === '2'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
          <AnswerOptionText>
            {questionData[questionIndex]?.asnwer[1].answer_content}
          </AnswerOptionText>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="3"
            checked={answer === '3'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
          <AnswerOptionText>
            {questionData[questionIndex]?.asnwer[2].answer_content}
          </AnswerOptionText>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="4"
            checked={answer === '4'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
          <AnswerOptionText>
            {questionData[questionIndex]?.asnwer[3].answer_content}
          </AnswerOptionText>
        </RadioBtnBox>
        <RadioBtnBox>
          <RadioBtn
            type="radio"
            value="5"
            checked={answer === '5'}
            onChange={e => handleBtnAnswer(e)}
          />
          <RadioBtnLabel />
          <AnswerOptionText>
            {questionData[questionIndex]?.asnwer[4].answer_content}
          </AnswerOptionText>
        </RadioBtnBox>
      </AnswerButtonWrapper>
      <NextButton
        onClick={() => {
          handleQuestionIndex();
          handleSubmitBtn();
        }}
      >
        {questionIndex === 9 ? `FINISH` : `NEXT`}
      </NextButton>
    </>
  );
};

export default Card;

const QuestionCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 296px;
`;

const QuestionDesc = styled.div``;

const QuestionIndex = styled.p`
  font-weight: 600;
  font-size: 23px;
  line-height: 34px;
  margin-top: 36px;
`;

const Timer = styled.p`
  position: absolute;
  top: 24px;
  right: 45px;
  font-weight: 700;
  font-size: 33px;
  color: #696f79;
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
  gap: 48px;
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
      display: flex;
      margin: 2px;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      background: darkgray;
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
          margin: 2px;
          border-radius: 50%;
          width: 12px;
          height: 12px;
          background: #000;
        }
      }
    `}
`;

const AnswerOptionText = styled.p`
  margin-left: 32px;
  font-weight: 400;
  font-size: 18px;
  color: #696f79;
`;
