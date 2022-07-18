import styled from 'styled-components';
import ContentItem from './ContentItem';
import { flex } from '../styles/Mixin';
import { useNavigate } from 'react-router-dom';

const Aside = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/');
  };

  return (
    <SideBar>
      <Content>
        {SIDEDATA &&
          SIDEDATA.map(contentData => {
            return <ContentItem key={contentData.id} {...contentData} />;
          })}
      </Content>
      <Logout>
        <LogoutImg src="/images/Logout.svg" alt="로그아웃사진" />
        <LogoutText onClick={handleLogout}>Log Out</LogoutText>
      </Logout>
    </SideBar>
  );
};

export default Aside;

const SIDEDATA = [
  {
    id: 1,
    contentImg: '/images/DashboardImg.svg',
    contentImgWhite: '/images/DashboardImgW.svg',
    contentName: 'Dashboard',
  },
  {
    id: 2,
    contentImg: '/images/SupportImg.svg',
    contentImgWhite: '/images/SupportImgW.svg',
    contentName: 'Support',
  },
  {
    id: 3,
    contentImg: '/images/NotificationImg.svg',
    contentImgWhite: '/images/NotificationImgW.svg',
    contentName: 'Notification',
  },
];

const SideBar = styled.div`
  ${flex('space-between', 'center')}
  flex-direction: column;
  width: 270px;
  background-color: #fbf9f9;
`;

const Content = styled.ul`
  margin-top: 40px;
`;

const Logout = styled.div`
  ${flex('center', ' center')}
  margin-bottom: 50px;
  cursor: pointer;
`;

const LogoutImg = styled.img`
  width: 20px;
  height: 20px;
`;

const LogoutText = styled.div`
  margin-left: 20px;
  color: #696f79;
  font-weight: 600;
  font-size: 20px;
`;
