import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
}

/** ページ見出し */
const PageHeading: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <Container>
      <Heading>{title}</Heading>
    </Container>
  );
};

export default PageHeading;

// style
const Container = styled.div`
  text-align: center;
  margin: 64px 0;
`;
const Heading = styled.h1`
  font-size: 24px;
  color: #0000df;
`;
