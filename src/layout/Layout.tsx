import React from 'react';
import styled from '@emotion/styled';

// from app
import AppHeader from '../components/partials/AppHeader';

const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <Container>
      <AppHeader />
      {children}
    </Container>
  );
}

export default Layout;

// style
const Container = styled.div`
  text-align: center;
`;
