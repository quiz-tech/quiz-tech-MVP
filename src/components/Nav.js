import styled from 'styled-components';
import { flex } from '../styles/Mixin';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/');
  };

  return (
    <NavBar>
      <NavContainer>
        <Title onClick={goToDashboard}>Quiz Tech</Title>
        <UserSearch>
          <SearchImg src="/images/Search.svg" />
          <SearchInput placeholder="search.." />
        </UserSearch>
        <StartQuizBtn>Start Quiz</StartQuizBtn>
        <UserProfile>
          <UserImg src="/images" alt="^" />
          <UserName>Kyuhyun Ro^</UserName>
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
  margin-left: 150px;
`;

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  margin: 20px 0 0 30px;
  border-radius: 45px;
`;

const UserName = styled.span`
  font-size: 18px;
  margin: 20px 0 0 10px;
`;
