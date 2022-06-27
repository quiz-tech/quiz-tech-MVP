import styled from 'styled-components';

const ContentItem = () => {
  return (
    <Content>
      <ContentImg />
      <ContentText>나는콘텐츠</ContentText>
    </Content>
  );
};

export default ContentItem;

const Content = styled.li`
border: 1px solid #8692A6;

`;

const 