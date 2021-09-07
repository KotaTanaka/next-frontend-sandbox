import { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { Button } from '@chakra-ui/react';
import useCreateBook from '@/hooks/useCreateBook';
import useGetBookList from '@/hooks/useGetBookList';
import { bookListState } from '@/atoms/book';
import PageHeading from '@/components/partials/PageHeading';
import BookList from '@/components/books/BookList';
import CreateBookModal from '@/components/books/CreateBookModal';
import { IGetBookListResponse } from '@/interfaces/response/book';
import { useCallback } from 'react';

/** 書籍一覧ページ */
const BooksListPage: NextPage = () => {
  const { loading, error, refetch } = useGetBookList();

  // prettier-ignore
  const bookList: IGetBookListResponse = useRecoilValue<IGetBookListResponse>(bookListState);

  /** 書籍登録ロジック */
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
    sendCreateBook,
  } = useCreateBook();

  const onClickModalOk = useCallback(async () => {
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
      <Button onClick={openModal}>書籍登録</Button>
      <div className="mt-16">
        <BookList books={bookList.books} />
      </div>
      <CreateBookModal
        isOpen={isCreateModalOpen}
        onOk={onClickModalOk}
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
    </div>
  );
};

export default BooksListPage;
