import styled from 'styled-components';

const ContentsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContentsWrapper;

const Wrapper = styled.div`
  position: relative;
  width: calc(100% - 270px);
  margin: 0 30px 30px 0;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 3px 3px 3px lightgray;
`;
