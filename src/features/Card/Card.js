import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Title, SubTitle } from '../List/List';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { infoUpdate } from './resultSlice';
import { asnwerUpdate } from './questionSlice';
import Timer from './Timer';
import Modal from '../../components/Modal';

const Card = () => {
  const [questionData, setQuestionData] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [correctCount, setCorrectCount] = useState(0);

  const [questionAnswerData, setQuestionAnswerData] = useState([]);

  // console.log(questionAnswerData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const result = useSelector(state => state.result);
  const answersData = useSelector(state => state.answers);
  const correctAnswerIndex = [];

  console.log('result', result);
  console.log('answersData', answersData);

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
      // setQuestionResultData({
      //   elapsedTime: 0,
      //   isPassed: correctCount >= 7,
      //   correctCount: correctCount,
      // });
      dispatch(
        asnwerUpdate({
          questionId: questionIndex,
          choosenAnswer: answer,
          correctAnswer: correctAnswerIndex[questionIndex],
          isCorrect: answer === correctAnswerIndex[questionIndex],
        })
      );
      setQuestionIndex(prev => (prev += 1));
      setAnswer('');
    }
  };
  const handleSubmitBtn = () => {
    //결과 POST통신 함수
  };

  useEffect(() => {
    dispatch(infoUpdate(correctCount));
  }, [correctCount, dispatch]);

  useEffect(() => {
    fetch('http://backend.tecquiz.net:8000/questions/category/2/quiz/')
      .then(res => res.json())
      .then(res => {
        setQuestionData(res.content);
      })
      .catch(err => console.log('err:', err));
  }, []);

  return (
    <>
      {questionIndex === 10 ? <Modal /> : null}
      <Title>타이틀</Title>
      <SubTitle>서브 타이틀</SubTitle>
      <QuestionCard>
        {questionIndex <= 9 && (
          <>
            <QuestionDesc>
              <QuestionIndex>{`Question ${
                questionIndex + 1
              }/10`}</QuestionIndex>
              <QuestionExplanation>
                {questionData[questionIndex]?.question}
              </QuestionExplanation>
            </QuestionDesc>
            <QuestionImage />
          </>
        )}

        {/* <Timer
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        /> */}
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
      <PrevButton
        disabled={questionIndex === 0 ? true : false}
        style={questionIndex === 0 ? { opacity: 0.3 } : { opacity: 1 }}
        onClick={() => {
          setQuestionIndex(prev => prev - 1);
        }}
      >
        PREV
      </PrevButton>
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

const PrevButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 284px;
  width: 212px;
  height: 65px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  background: #8692a6;
  border-radius: 27px;
`;
