import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
}

/** ページ見出し */
const PageHeading: React.FC<Props> = (props: Props) => {
  const { title } = props;

  return (
    <Container>
      <Heading>{title}</Heading>
    </Container>
  );
}

export default PageHeading;

// style
const Container = styled.div`
  text-align: center;
`;
const Heading = styled.h1`
  font-size: 18px;
`;
