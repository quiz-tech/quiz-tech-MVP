import styled from 'styled-components';

const SelectQuiz = ({ ...quizData }) => {
  return (
    <SelectQuizContainer>
      <QuizImg src={quizData.CategoryImg} alt="퀴즈선택사진">
        <QuizName>{quizData.CategoryName}</QuizName>
      </QuizImg>
    </SelectQuizContainer>
  );
};

export default SelectQuiz;

const SelectQuizContainer = styled.div`
  width: 360px;
  height: 230px;
  border: 1px solid gray;
`;

const QuizImg = styled.img`
  width: 100%;
  height: 100%;
`;

const QuizName = styled.div``;
