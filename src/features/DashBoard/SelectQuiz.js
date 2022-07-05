import styled from 'styled-components';
import { flex } from '../../styles/Mixin';
import { useNavigate } from 'react-router-dom';

const SelectQuiz = ({ ...quizData }) => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate(`/list/${quizData.id}`);
  };

  return (
    <SelectQuizContainer onClick={goToQuiz}>
      <QuizImg src={quizData.CategoryImg} alt="퀴즈선택사진" />
      <QuizName>{quizData.CategoryName}</QuizName>
    </SelectQuizContainer>
  );
};

export default SelectQuiz;

const SelectQuizContainer = styled.button`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin: 0 30px;
  border-radius: 30px;
`;

const QuizImg = styled.img`
  width: 100%;
  height: 100%;
`;

const QuizName = styled.span`
  margin-top: 10px;
  font-weight: 700;
  font-size: 17px;
`;
