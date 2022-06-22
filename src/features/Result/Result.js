import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';

const Result = () => {
  return (
    <>
      <Title>Quiz Result</Title>
      <SubTitle>You can see it by pressing</SubTitle>
      <ListTitle>Your Quiz</ListTitle>
      <ListContainer>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
        <QustionResult>
          <QustionIndex>#1</QustionIndex>
          <QustionDesc>문제 설명</QustionDesc>
          <AnswerResult>O</AnswerResult>
        </QustionResult>
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
`;

const QustionIndex = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: #696f79;
  margin-right: 52px;
`;

const QustionDesc = styled.p`
  font-size: 24px;
  color: #696f79;
`;

const AnswerResult = styled.span`
  position: absolute;
  right: 46px;
  font-weight: 700;
  font-size: 23px;
  line-height: 34px;
`;
