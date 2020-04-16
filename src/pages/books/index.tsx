import { NextPage } from 'next';
import { Button } from 'antd';
import styled from '@emotion/styled';

// from app
import Layout from '@/layout/Layout';
import { useCreateBook, useGetBookList } from '@/hooks';
import PageHeading from '@/components/partials/PageHeading';
import BookList from '@/components/books/BookList';
import CreateBookModal from '@/components/books/CreateBookModal';

/** 書籍一覧ページ */
const BooksListPage: NextPage = () => {
  const { loading, error, data } = useGetBookList();

  /** 書籍登録フック */
  const {
    isCreateModalOpen,
    openModal,
    closeModal,
    createBookParams,
    changeName,
    changeOutline,
    changeAuthor,
    changePublisher,
    changeCategory,
    changePrice,
    changeReleasedAt,
    resetCreateBookParams,
    createBook,
  } = useCreateBook();

  const handleCancelModal = () => {
    resetCreateBookParams();
    closeModal();
  };

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
        <BookList books={data.books} />
      </Contents>
      <CreateBookModal
        isOpen={isCreateModalOpen}
        onOk={createBook}
        onCancel={handleCancelModal}
        params={createBookParams}
        onChangeName={changeName}
        onChangeOutline={changeOutline}
        onChangeAuthor={changeAuthor}
        onChangePublisher={changePublisher}
        onChangeCategory={changeCategory}
        onChangePrice={changePrice}
        onChangeReleasedAt={changeReleasedAt}
      />
    </Layout>
  );
};

export default BooksListPage;

// style
const Contents = styled.div`
  margin-top: 64px;
`;
