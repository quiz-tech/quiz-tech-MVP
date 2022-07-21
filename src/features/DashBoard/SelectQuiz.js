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
      <QuizImgBase>
        <QuizImg src={quizData.CategoryImg} alt="퀴즈선택사진" />
      </QuizImgBase>
      <QuizName>{quizData.CategoryName}</QuizName>
    </SelectQuizContainer>
  );
};

export default SelectQuiz;

const SelectQuizContainer = styled.button`
  ${flex('center', 'center')}
  flex-direction: column;
  width: 240px;
  height: 170px;
  border-radius: 30px;
  box-shadow: 5px 5px 5px lightgray;
  /* @media (min-width: 1793px) {
    width: 150px;
    height: 150px;
  } */
`;

const QuizImgBase = styled.div`
  width: 75px;
  height: 75px;
`;

const QuizImg = styled.img`
  width: 100%;
  height: 100%;
`;

const QuizName = styled.span`
  margin-top: 10px;
  font-weight: 400;
  font-size: 17px;
  /* @media (min-width: 1793px) {
    font-size: 20px;
  } */
`;
