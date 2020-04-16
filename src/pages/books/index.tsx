import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from '@emotion/styled';
import { Button } from 'antd';

// from app
import { PAGE_URL } from '@/constants';
import Layout from '@/layout/Layout';
import { useCreateBook } from '@/hooks';
import PageHeading from '@/components/partials/PageHeading';
import CreateBookModal from '@/components/books/CreateBookModal';

const booksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

/** 書籍一覧ページ */
const BooksListPage: NextPage = () => {
  const { loading, error, data } = useQuery(booksQuery);

  /** 書籍登録フック */
  const {
    isCreateModalOpen,
    openModal,
    closeModal,
    createBook,
  } = useCreateBook();

  // TODO ローディング
  if (loading) return <p>Loading...</p>;

  // TODO エラーハンドリング
  if (error) return <p>Error! {error.message}</p>;

  return (
    <Layout>
      <PageHeading title="書籍一覧" />
      <Button type="primary" onClick={openModal}>
        書籍登録
      </Button>
      <Contents>
        <ul>
          {data.books.map(({ id, name }) => (
            <li>
              <Link
                key={id}
                href={PAGE_URL.BOOK}
                as={PAGE_URL.BOOK.replace('[id]', id)}
              >
                <LinkText>{name}</LinkText>
              </Link>
            </li>
          ))}
        </ul>
      </Contents>
      <CreateBookModal
        isOpen={isCreateModalOpen}
        onOk={createBook}
        onCancel={closeModal}
      />
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
