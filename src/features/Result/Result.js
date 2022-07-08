import React from 'react';
import { useEffect } from 'react';
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

  useEffect(() => {
    if (answers.length === 0) {
      navigate('/');
    }
  }, [answers.length, navigate]);

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
              <Question>
                <QustionIndex>{`#${idx + 1}`}</QustionIndex>
                <QustionDesc>{questions[idx]?.question}</QustionDesc>
              </Question>
              <AnswerResult isCorrect={answer.isCorrect}>
                {answer.isCorrect ? 'O' : 'X'}
              </AnswerResult>
            </QustionResult>
          );
        })}
      </ListContainer>
      <NextButton onClick={() => navigate('/')}>HOME</NextButton>
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
  height: 60%;
  margin-top: 32px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #696f79;
    border-radius: 5px;
  }
`;

const QustionResult = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px;
  padding-bottom: 12px;
  margin-top: 8px;
  border-bottom: 1px solid #767676;
  cursor: pointer;
`;

const Question = styled.div`
  display: flex;
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
  font-weight: 700;
  font-size: 23px;
  line-height: 34px;
  margin-right: 32px;
  ${props =>
    props.isCorrect
      ? css`
          color: green;
        `
      : css`
          color: red;
        `}
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 212px;
  height: 65px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  background: #8692a6;
  border-radius: 27px;
`;
