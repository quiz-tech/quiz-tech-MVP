import styled from 'styled-components';
import { flex } from '../styles/Mixin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContentItem = ({ ...contentData }) => {
  const navigate = useNavigate();

  const NavigateContent = name => {
    // name === '/support' || '/notification'
    Swal.fire({
      text: '아직 서비스가 지원되지 않습니다.',
      icon: 'info',
      iconColor: '#484848',
      confirmButtonColor: '#000',
      confirmButtonText: '확인',
    });
    // : navigate(`${name}`);
  };

  return (
    <Content onClick={() => NavigateContent(contentData.navigateUri)}>
      <ContentBox>
        <ContentImg src={contentData.contentImg} alt="카테고리사진" />
        <ContentText>{contentData.contentName}</ContentText>
      </ContentBox>
    </Content>
  );
};

export default ContentItem;

const Content = styled.li`
  width: 200px;
  margin-bottom: 40px;
  background-color: #ffffff;
  color: #696f79;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 2px lightgray;
  cursor: pointer;
`;

const ContentBox = styled.div`
  ${flex('space-between', 'center')}
  width: 100px;
  height: 50px;
  margin-left: 40px;
`;

const ContentImg = styled.img`
  width: 15px;
  height: 15px;
`;

const ContentText = styled.span`
  margin: 5px 0 0 15px;
  font-weight: 600;
  font-size: 18px;
`;
