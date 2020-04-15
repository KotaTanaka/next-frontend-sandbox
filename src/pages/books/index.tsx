import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from '@emotion/styled';

// from app
import { PAGE_URL } from '@/constants';
import Layout from '@/layout/Layout';
import PageHeading from '@/components/partials/PageHeading';

const booksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

const BooksListPage: NextPage = () => {
  const { loading, error, data } = useQuery(booksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <Layout>
      <PageHeading title="書籍一覧" />
      <Contents>
        {data.books.map(({ id, name }) => (
          <Link
            key={id}
            href={PAGE_URL.BOOK}
            as={PAGE_URL.BOOK.replace('[id]', id)}
          >
            <LinkText>{name}</LinkText>
          </Link>
        ))}
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
