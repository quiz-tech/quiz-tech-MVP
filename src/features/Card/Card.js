import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';

const Card = () => {
  const [answer, setAnswer] = useState('');
  const [questionData, setQuestionData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  //문제 풀이에서 저장 및 통신에 필요한 데이터
  //1.고른답
  //2.정답 여부 - 고른답과 정답을 비교해 boolean 값으로 저장

  //4.통과 여부

  const handleBtnAnswer = idx => {
    setAnswer(idx);
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
        {questionData[questionIndex]?.asnwer?.map((answerInfo, idx) => {
          return (
            <RadioBtnBox
              key={idx}
              onClick={() => {
                handleBtnAnswer(idx);
              }}
            >
              <RadioBtn answer={answer} idx={idx} />
              <AnswerOptionText>{answerInfo.answer_content}</AnswerOptionText>
            </RadioBtnBox>
          );
        })}
      </AnswerButtonWrapper>
      <NextButton
        onClick={() => {
          handleQuestionIndex();
          handleSubmitBtn();
        }}
        disabled={answer === '' ? true : false}
        style={answer === '' ? { opacity: 0.3 } : { opacity: 1 }}
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
  cursor: pointer;
`;

const RadioBtn = styled.div`
  width: 24px;
  height: 24px;
  background-image: url('images/radioButton/unChecked.png');
  ${props =>
    props.idx === props.answer &&
    css`
      background-image: url('images/radioButton/checked.png');
    `}

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const AnswerOptionText = styled.p`
  margin-top: 2px;
  margin-left: 32px;
  font-weight: 400;
  font-size: 18px;
  color: #696f79;
`;
