import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle, NextButton } from '../List/List';

const Support = () => {
  return (
    <>
      <Title>Support</Title>
      <SubTitle>문의가 있으시면 언제든 보내주세요 !</SubTitle>
      <SupportWrap>
        <SupportTitle>
          어떤 문의든 상관 없습니다. <br />
          제출하기 버튼을 누르면 담당자에게 <br />
          메일이 출발합니다.
        </SupportTitle>
        <SupportText placeholder="어떤 형식의 문의여도 상관없습니다. 편하게 보내주세요 :)" />
        <SupportList>
          <SupportTopic>이메일</SupportTopic>
          <SupportInput placeholder="QuizTech@gmail.com 형식으로 보내주세요." />
        </SupportList>
        <SupportList>
          <SupportTopic>이름</SupportTopic>
          <SupportInput placeholder="이름을 적어주세요." />
        </SupportList>
        <SupportList>
          <SupportTopic>번호</SupportTopic>
          <SupportInput placeholder="010-1234-5678 형식으로 보내주세요." />
        </SupportList>
      </SupportWrap>
      <NextButton>Submit</NextButton>
    </>
  );
};

export default Support;

const SupportWrap = styled.div`
  margin: 70px auto 0;
  width: 500px;
  text-align: center;
`;
const SupportTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.3;
`;
const SupportText = styled.textarea`
  width: 478px;
  height: 200px;
  padding: 10px;
  border: 1px solid #767676;
  border-radius: 8px;
  resize: none;
`;

const SupportList = styled.div`
  text-align: left;
  margin-top: 30px;
`;
const SupportTopic = styled.p``;
const SupportInput = styled.input`
  width: 100%;
  height: 26px;
  padding: 10px 5px;
  border-width: 0 0 1px;
  outline: none;
`;
