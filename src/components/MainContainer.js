import styled from 'styled-components';

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;

const Container = styled.div`
  display: flex;
  background-color: #fbf9f9;
  height: 630px;
  width: 100%;
`;
