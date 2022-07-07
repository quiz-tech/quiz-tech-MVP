import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Title, SubTitle } from '../List/List';

const CompareAnswer = () => {
  const params = useParams();
  const questionData = useSelector(state => state.answers.questions[params.id]);
  const answersData = useSelector(state => state.answers.answers[params.id]);

  return (
    <>
      <Title>Compare Answers</Title>
      <QuestionCard>
        <QuestionDesc>
          <QuestionIndex>{`Question ${
            parseInt(params.id) + 1
          }/10`}</QuestionIndex>
          <QuestionExplanation>{questionData?.question}</QuestionExplanation>
        </QuestionDesc>
        <QuestionImage />
      </QuestionCard>
      <AnswerDesc>Choose Answer</AnswerDesc>
      <AnswerButtonWrapper>
        {questionData?.answer?.map((answerInfo, idx) => {
          return (
            <RadioBtnBox key={idx}>
              <RadioBtn choosenAnswer={answersData.choosenAnswer} idx={idx} />
              <AnswerOptionText>{answerInfo.answer_content}</AnswerOptionText>
              <AnswerInfo
                correctAnswer={answersData.correctAnswer}
                choosenAnswer={answersData.choosenAnswer}
                idx={idx}
              >
                {(idx === answersData.choosenAnswer && 'Your Answer') ||
                  (idx === answersData.correctAnswer && 'Correct Answer')}
                {}
              </AnswerInfo>
            </RadioBtnBox>
          );
        })}
      </AnswerButtonWrapper>
    </>
  );
};

export default CompareAnswer;

const QuestionCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 276px;
`;

const QuestionDesc = styled.div``;

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
  background-image: url('/images/radioButton/unChecked.png');
  ${props =>
    props.idx === props.choosenAnswer &&
    css`
      background-image: url('/images/radioButton/checked.png');
    `}

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const AnswerDesc = styled.p`
  display: inline-block;
  margin-bottom: 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: #696f79;
`;

const AnswerOptionText = styled.p`
  margin-top: 2px;
  margin-left: 32px;
  font-weight: 400;
  font-size: 18px;
  color: #696f79;
`;

const AnswerInfo = styled.p`
  margin-left: 40px;
  font-weight: 700;
  font-size: 18px;
  color: #08ad36;

  ${props =>
    props.idx === props.choosenAnswer &&
    props.choosenAnswer !== props.correctAnswer &&
    css`
      color: #f24e1e;
    `}
`;
