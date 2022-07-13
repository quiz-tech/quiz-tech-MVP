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
  ${flex('center', 'center')}
  flex-direction: column;
  width: 100px;
  height: 100px;
  margin: 0 30px;
  border-radius: 30px;
  @media (min-width: 1792px) {
    width: 150px;
    height: 150px;
  }
`;

const QuizImg = styled.img`
  width: 100%;
  height: 100%;
`;

const QuizName = styled.span`
  margin-top: 15px;
  font-weight: 400;
  font-size: 17px;
  @media (min-width: 1792px) {
    font-size: 20px;
  }
`;
