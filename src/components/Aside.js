import styled from 'styled-components';

const Aside = () => {
  return (
    <SideBar>
      <Content>
        <ContentItem />
      </Content>
    </SideBar>
  );
};

export default Aside;

const SideBar = styled.div`
  background-color: #fbf9f9;
  width: 270px;
`;

const Content = styled.ul;
