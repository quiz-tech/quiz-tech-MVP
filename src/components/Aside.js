import styled from 'styled-components';
import ContentItem from './ContentItem';
import { flex } from '../styles/Mixin';
import { useEffect } from 'react';

const Aside = () => {
  useEffect(() => {});

  return (
    <SideBar>
      <Content>
        <ContentItem />
      </Content>
      <Logout>
        <LogoutImg src="/images/Logout.svg" alt="로그아웃사진" />
        <LogoutText>Log Out</LogoutText>
      </Logout>
    </SideBar>
  );
};

export default Aside;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fbf9f9;
  width: 270px;
`;

const Content = styled.ul`
  margin-top: 40px;
`;

const Logout = styled.div`
  ${flex('center', ' center')}
  margin-bottom: 50px;
`;

const LogoutImg = styled.img`
  width: 20px;
  height: 20px;
`;
const LogoutText = styled.span`
  margin-left: 20px;
  color: #696f79;
  font-weight: 600;
  font-size: 20px;
`;
