import { GetServerSideProps, NextPage } from 'next';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { bookListState } from '@/atoms/book';
import BookList from '@/components/books/BookList';
import CreateBookModal from '@/components/books/CreateBookModal';
import ButtonPrimary from '@/components/partials/Button/ButtonPrimary';
import PageHeading from '@/components/partials/PageHeading';
import useCreateBook from '@/hooks/useCreateBook';
import useGetBookList, { booksQuery } from '@/hooks/useGetBookList';
import { IBook, IGetBookListResponse } from '@/interfaces/response/book';
import { apolloClient } from '@/utils/ApolloUtils';

export interface IProps {
  initialBooksData: IGetBookListResponse;
}

/** 書籍一覧ページ */
const BookListPage: NextPage<IProps> = (props) => {
  const { initialBooksData } = props;

  /** 書籍一覧取得ロジック */
  const { loading, error, refetch } = useGetBookList(initialBooksData);

  /** 書籍一覧 */
  const bookList = useRecoilValue<IBook[]>(bookListState);

  /** 書籍登録ロジック */
  const {
    isCreateModalOpen,
    openModal,
    closeModal,
    createBookParams,
    resetCreateBookParams,
    changeName,
    changeOutline,
    changeAuthor,
    changePublisher,
    changeCategory,
    changePrice,
    changeReleasedAt,
    sendCreateBook,
  } = useCreateBook();

  const onClickModalSubmit = useCallback(async () => {
    await sendCreateBook();
    await refetch();
    closeModal();
  }, [sendCreateBook, refetch, closeModal]);

  const onClickModalCancel = useCallback(() => {
    resetCreateBookParams();
    closeModal();
  }, [resetCreateBookParams, closeModal]);

  // TODO ローディング
  if (loading) return <p>Loading...</p>;

  // TODO エラーハンドリング
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div>
      <PageHeading title="書籍一覧" />
      <div className="mt-16">
        <BookList books={bookList} />
      </div>
      <CreateBookModal
        isOpen={isCreateModalOpen}
        onSubmit={onClickModalSubmit}
        onCancel={onClickModalCancel}
        params={createBookParams}
        onChangeName={changeName}
        onChangeOutline={changeOutline}
        onChangeAuthor={changeAuthor}
        onChangePublisher={changePublisher}
        onChangeCategory={changeCategory}
        onChangePrice={changePrice}
        onChangeReleasedAt={changeReleasedAt}
      />
      <div className="mt-16">
        <ButtonPrimary label="新規登録" width="240px" onClick={openModal} />
      </div>
    </div>
  );
};

export default BookListPage;

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const response = await apolloClient.query<IGetBookListResponse>({
    query: booksQuery,
  });

  return {
    props: {
      initialBooksData: response.data,
    },
  };
};
