import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';

const Card = () => {
  const [questionData, setQuestionData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [correctCount, setCorrectCount] = useState(0);

  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  const [questionAnswerData, setQuestionAnswerData] = useState([]);
  // [{questionId: 0, choosenAnswer: 0, correctAnswer: 0, isCorrect: Boolean} x 10]
  //문제 풀이항목 데이터
  //1. 문제 인덱스
  //2. 고른답 - 문제 선택지 index 저장
  //3. 정답 - 문제 정답 인덱스
  //4. 정답 여부 - 고른답과 정답을 비교해 boolean 값으로 저장
  const [questionResultData, setQuestionResultData] = useState([]);
  // {elapsedTime: 0, isPassed: Boolean}
  //문제 풀이결과 데이터
  //1. 걸린 시간 - submit 시에 타이머 시간 저장
  //2. 통과 여부 - 정답인 문제 개수가 7개 이상일때 ture, 이하일때 false
  //3. 맞은 문제 개수 = isCorrect가 ture일때 +1
  //next버튼 클릭시 이 객체 추가
  console.log(questionAnswerData);
  console.log(questionResultData);

  const navigate = useNavigate();
  const correctAnswerIndex = [];

  questionData.forEach(questionElenents => {
    questionElenents.answer.forEach((answerEl, idx) => {
      answerEl.answer === true && correctAnswerIndex.push(idx);
    });
  });

  const handleBtnAnswer = idx => {
    setAnswer(idx);
  };
  const handleQuestionIndex = () => {
    if (answer === correctAnswerIndex[questionIndex]) {
      setCorrectCount(prev => (prev += 1));
    }
    if (questionIndex <= 10) {
      setQuestionAnswerData(prev => [
        ...prev,
        {
          questionId: questionIndex,
          choosenAnswer: answer,
          correctAnswer: correctAnswerIndex[questionIndex],
          isCorrect: answer === correctAnswerIndex[questionIndex],
        },
      ]);
      setQuestionIndex(prev => prev + 1);
      setAnswer('');
    }
  };
  const handleSubmitBtn = () => {
    //결과 POST통신 함수
  };

  useEffect(() => {
    console.log(correctCount);
    setQuestionResultData({
      elapsedTime: 0,
      isPassed: correctCount >= 7,
      correctCount: correctCount,
    });
  }, [correctCount, questionIndex]);

  useEffect(() => {
    fetch('http://localhost:3000/data/cardData.json')
      .then(res => res.json())
      .then(res => {
        setQuestionData(res.content);
      });
    questionAnswerData.length === 10 && navigate('/result');
  }, [navigate, questionIndex]);

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
        {/* <Timer
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        /> */}
        <QuestionImage />
      </QuestionCard>
      <AnswerButtonWrapper>
        {questionData[questionIndex]?.answer?.map((answerInfo, idx) => {
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
