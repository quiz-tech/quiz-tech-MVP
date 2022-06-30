import styled from 'styled-components';
import { flex } from '../styles/Mixin';
import { useState } from 'react';

const ContentItem = ({ ...contentData }) => {
  return (
    <Content>
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
  color: #696f79;
  border-radius: 30px;
  border: 1px solid gray;
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
