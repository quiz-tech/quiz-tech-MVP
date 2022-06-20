import styled from 'styled-components';

const ContentsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentsWrapper;

const Wrapper = styled.div`
  width: calc(100% - 270px);
  height: 610px;
  margin-right: 30px;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid black;
`;
