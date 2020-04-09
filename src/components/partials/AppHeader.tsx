import { NextComponentType } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

// from app
import { PAGE_URL } from '@/constants';

/** ヘッダー */
const AppHeader: NextComponentType = () => {
  return (
    <Container>
      <Link href={PAGE_URL.HOME}>
        <LinkText>Home</LinkText>
      </Link>
      <Link href={PAGE_URL.ABOUT}>
        <LinkText>About Page</LinkText>
      </Link>
    </Container>
  );
}

export default AppHeader;

// style
const Container = styled.div`
  text-align: center;
`;
const LinkText = styled.a`
  cursor: pointer;
  margin: 16px;
`;
