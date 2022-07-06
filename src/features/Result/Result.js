import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useBeforeunload } from 'react-beforeunload';
import { Title, SubTitle } from '../List/List';

const Result = () => {
  const answers = useSelector(state => state.answers.answers);
  const questions = useSelector(state => state.answers.questions);

  const navigate = useNavigate();
  useBeforeunload(event => event.preventDefault());

  return (
    <>
      <Title>Quiz Result</Title>
      <SubTitle>You can see it by pressing</SubTitle>
      <ListTitle>Your Quiz</ListTitle>
      <ListContainer>
        {answers.map((answer, idx) => {
          return (
            <QustionResult
              key={idx}
              onClick={() => {
                navigate(`/result/compare/${idx}`);
              }}
            >
              <QustionIndex>{`#${idx + 1}`}</QustionIndex>
              <QustionDesc>{questions[idx].question}</QustionDesc>
              <AnswerResult isCorrect={answer.isCorrect}>
                {answer.isCorrect ? 'O' : 'X'}
              </AnswerResult>
            </QustionResult>
          );
        })}
      </ListContainer>
    </>
  );
};

export default Result;

const ListTitle = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #696f79;
  margin-top: 16px;
`;

const ListContainer = styled.ul`
  margin-top: 32px;
`;

const QustionResult = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 8px;
  padding-bottom: 12px;
  margin-top: 8px;
  border-bottom: 1px solid #767676;
  cursor: pointer;
`;

const QustionIndex = styled.p`
  width: 40px;
  font-weight: 600;
  font-size: 24px;
  color: #696f79;
  margin-right: 40px;
`;

const QustionDesc = styled.p`
  font-size: 20px;
  color: #696f79;
`;

const AnswerResult = styled.span`
  position: absolute;
  right: 46px;
  font-weight: 700;
  font-size: 23px;
  line-height: 34px;

  ${props =>
    props.isCorrect
      ? css`
          color: green;
        `
      : css`
          color: red;
        `}
`;
