import styled from 'styled-components';
import { flex } from '../styles/Mixin';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    localStorage.getItem('access')
      ? fetch(
          'https://cors-anywhere.herokuapp.com/http://backend.tecquiz.net:8000/users/profile/',
          // FIX ME: 배포 되어 있는 프록시 서버를 이용하여 우회 통신 성공
          // 'http://backend.tecquiz.net:8000/users/profile/',
          {
            // mode: 'no-cors',
            headers: {
              // Access-Control-Allow-Credentials: true,
              access: localStorage.getItem('access'),
            },
          }
        )
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            // console.log(data[0].rank_set[0]);
            setUserProfile(data[0]);
            setUserData(data[0].rank_set[0]);
          })
      : navigate('/login');
  }, []);

  // console.log(userData);
  console.log(userProfile);
  console.log(userProfile.picture);

  const goToDashboard = () => {
    navigate('/');
  };

  return (
    <NavBar>
      <NavContainer>
        <LogoLink to="/">
          <Title onClick={goToDashboard}>Quiz Tech</Title>
        </LogoLink>
        <UserSearch>
          <SearchImg src="/images/Search.svg" alt="검색창사진" />
          <SearchInput placeholder="search.." type="text" />
        </UserSearch>
        <ListLink to="/list/1">
          <StartQuizBtn>Start Quiz</StartQuizBtn>
        </ListLink>
        <UserProfile>
          <UserImg src={userProfile.picture} alt="유저사진" />
          <UserName>{userProfile.username}</UserName>
        </UserProfile>
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
  margin: 30px 0 0 30px;
  cursor: pointer;
`;

const UserSearch = styled.div`
  ${flex('flex-start', 'center')}
  width:400px;
  height: 45px;
  margin: 20px 0 0 50px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 2px lightgray;
`;

const SearchImg = styled.img`
  margin-left: 15px;
`;

const SearchInput = styled.input`
  width: 300px;
  margin-left: 20px;
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
  margin: 20px 0 0 150px;
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
