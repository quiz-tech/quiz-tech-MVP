import styled from 'styled-components';
import { flex } from '../../styles/Mixin';

const SelectQuiz = ({ ...quizData }) => {
  return (
    <SelectQuizContainer>
      <QuizImg src={quizData.CategoryImg} alt="퀴즈선택사진" />
      <QuizName>{quizData.CategoryName}</QuizName>
    </SelectQuizContainer>
  );
};

export default SelectQuiz;

const SelectQuizContainer = styled.div`
  width: 240px;
  height: 100px;
  margin: 0 40px 0 40px;
  border-radius: 30px;
`;

const QuizImg = styled.img`
  height: 100%;
`;

const QuizName = styled.span`
  font-weight: 700;
  font-size: 15px;
`;
