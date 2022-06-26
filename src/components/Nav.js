import styled from 'styled-components';
import { flex } from '../styles/Mixin';

const Nav = () => {
  return (
    <NavBar>
      <NavContainer>
        <Title>Quiz Tech</Title>
        <UserSearch>
          <SearchImg src="/images" />
          <SearchInput placeholder="search.." />
        </UserSearch>
        <StartQuizBtn>Start Quiz</StartQuizBtn>
        <UserProfile>
          <UserImg src="/images" />
          <UserName>Kyuhyun Ro</UserName>
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

const Title = styled.span`
  font-weight: 800;
  font-size: 40px;
  margin: 30px 0 0 30px;
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
  margin-left: 15px;
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
