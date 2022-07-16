import styled from 'styled-components';
import { flex } from '../styles/Mixin';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Nav = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    localStorage.getItem('access')
      ? fetch('https://backend.tecquiz.net/users/profile/', {
          headers: {
            access: localStorage.getItem('access'),
          },
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setUserProfile(data[0]);
            setUserData(data[0].rank_set[0]);
          })
      : navigate('/');
  }, []);

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const alret = () => {
    Swal.fire({
      text: '아직 서비스가 지원되지 않습니다.',
      icon: 'info',
      iconColor: '#484848',
      confirmButtonColor: '#000',
      confirmButtonText: '확인',
    });
  };

  return (
    <NavBar>
      <NavContainer>
        <LogoLink to="/dashboard">
          <Title onClick={goToDashboard}>Quiz Tech</Title>
        </LogoLink>
        <NavContents>
          <UserSearch onClick={alret}>
            <SearchImg src="/images/Search.svg" alt="검색창사진" />
            <SearchInput placeholder="search.." type="text" />
          </UserSearch>
          <UserProfile>
            <UserImg src={userProfile.picture} alt="유저사진" />
            <UserName>{userProfile.username}</UserName>
          </UserProfile>
        </NavContents>
      </NavContainer>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.div`
  height: 100px;
  background-color: #fbf9f9;
`;

const NavContainer = styled.div`
  ${flex('flex-start', 'center')}
`;

const LogoLink = styled(Link)`
  color: inherit;
`;

const ListLink = styled(LogoLink)``;

const Title = styled.div`
  font-weight: 800;
  font-size: 40px;
  margin: 30px 50px 0 30px;
  cursor: pointer;
`;

const NavContents = styled.div`
  ${flex('space-between', 'center')}
  width: calc(100% - 270px);
  margin-top: 20px;
`;

const UserSearch = styled.div`
  ${flex('flex-start', 'center')}
  width:400px;
  height: 45px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 2px lightgray;
`;

const SearchImg = styled.img`
  margin-left: 15px;
`;

const SearchInput = styled.input`
  width: 300px;
  /* margin-left: 20px; */
  font-size: 20px;
  border: none;
  outline: none;
`;

const StartQuizBtn = styled.button`
  width: 180px;
  height: 45px;
  margin: 20px 0 0 200px;
  background-color: #8692a6;
  color: #ffffff;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
`;

const UserProfile = styled.div`
  ${flex('center', 'center')}
  margin-right:50px;
`;

const UserImg = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 60px;
  border-radius: 45px;
`;

const UserName = styled.span`
  font-size: 17px;
  margin-left: 20px;
  color: #696f79;
`;
