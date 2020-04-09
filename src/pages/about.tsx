import React from 'react';
import styled from '@emotion/styled';

// from app
import AppHeader from '../components/partials/AppHeader';
import PageHeading from '../components/partials/PageHeading';

const About: React.FC = () => {
  return (
    <Container>
      <AppHeader />
      <PageHeading title="About Page"/>
    </Container>
  );
}

export default About;

// style
const Container = styled.div`
  text-align: center;
`;
