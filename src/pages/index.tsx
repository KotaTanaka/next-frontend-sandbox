import React from 'react';
import styled from '@emotion/styled';

// from app
import AppHeader from '../components/AppHeader';

const Home: React.FC = () => {
  return (
    <Container>
      <AppHeader />
    </Container>
  );
}

export default Home;

// style
const Container = styled.div`
  text-align: center;
`;
