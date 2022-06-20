import styled from 'styled-components';

const ContentsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentsWrapper;

const Wrapper = styled.div`
  width: calc(100% - 270px);
  margin: 0 30px 30px 0;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 30px;
  border: 1px solid black;
`;
