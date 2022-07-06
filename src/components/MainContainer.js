import styled from 'styled-components';

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;

const Container = styled.div`
  position: relative;
  display: flex;
  background-color: #fbf9f9;
  height: calc(100vh - 100px);
  width: 100%;
`;
