import { useDisclosure } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { bookListState } from '@/atoms/book';
import BookList from '@/components/books/BookList';
import EditBookModal from '@/components/books/EditBookModal';
import ButtonPrimary from '@/components/partials/Button/ButtonPrimary';
import PageHeading from '@/components/partials/PageHeading';
import useCreateBook from '@/hooks/useCreateBook';
import useGetBookList, { booksQuery } from '@/hooks/useGetBookList';
import type { IBook, IGetBookListResponse } from '@/interfaces/response/book';
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
  const { createBookParams, resetValues, changeValue, createBook } =
    useCreateBook();

  /** 登録モーダル制御 */
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();

  const onClickModalSubmit = useCallback(async () => {
    await createBook();
    await refetch();
    closeModal();
  }, [createBook, refetch, closeModal]);

  const onClickModalCancel = useCallback(() => {
    resetValues();
    closeModal();
  }, [resetValues, closeModal]);

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
      <EditBookModal
        isOpen={isModalOpen}
        type="create"
        onSubmit={onClickModalSubmit}
        onCancel={onClickModalCancel}
        params={createBookParams}
        onChangeName={(value: string) => changeValue('name', value)}
        onChangeOutline={(value: string) => changeValue('outline', value)}
        onChangeAuthor={(value: string) => changeValue('author', value)}
        onChangePublisher={(value: string) => changeValue('publisher', value)}
        onChangeCategory={(value: string) => changeValue('category', value)}
        onChangePrice={(value: number) => changeValue('price', value)}
        onChangeReleasedAt={(value: string) => changeValue('releasedAt', value)}
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
