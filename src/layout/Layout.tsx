import { NextComponentType } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import AppHeader from '@/components/partials/AppHeader';

const Layout: NextComponentType = (props) => {
  const { children } = props;

  return (
    <Container>
      <Head>
        <title>Books Management</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppHeader />
      {children}
    </Container>
  );
};

export default Layout;

// style
const Container = styled.div`
  text-align: center;
`;
