import { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

// from app
import { PAGE_URL } from '@/constants';
import Layout from '@/layout/Layout';
import PageHeading from '@/components/partials/PageHeading';

const BooksListPage: NextPage = () => {
  return (
    <Layout>
      <PageHeading title="書籍一覧" />
      <Contents>
        <Link
          href={PAGE_URL.BOOK}
          as={PAGE_URL.BOOK.replace('[id]', 'BOOK_ID')}
        >
          <LinkText>Book Title</LinkText>
        </Link>
      </Contents>
    </Layout>
  );
};

export default BooksListPage;

// style
const Contents = styled.div`
  margin-top: 64px;
`;
const LinkText = styled.a`
  cursor: pointer;
  margin: 16px;
`;
