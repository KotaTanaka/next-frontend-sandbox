import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

// from app
import { PAGE_URL } from '@/constants';
import Layout from '@/layout/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>本棚</h1>
      <Contents>
        <Link href={PAGE_URL.BOOKS}>
          <LinkText>書籍一覧</LinkText>
        </Link>
      </Contents>
    </Layout>
  );
}

export default HomePage;

// style
const Contents = styled.div`
  margin-top: 64px;
`;
const LinkText = styled.a`
  cursor: pointer;
  margin: 16px;
`;

