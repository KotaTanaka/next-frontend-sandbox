import { IconButton } from '@chakra-ui/button';
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { bookOneState } from '@/atoms/book';
import BookDetailTable from '@/components/books/BookDetailTable';
import EditBookModal from '@/components/books/EditBookModal';
import PageHeading from '@/components/partials/PageHeading';
import { PAGE_URL } from '@/constants';
import useGetBookOne, { getBookOneQuery } from '@/hooks/useGetBookOne';
import useUpdateBook from '@/hooks/useUpdateBook';
import type { IBook, IGetBookOneResponse } from '@/interfaces/response/book';
import { apolloClient } from '@/utils/ApolloUtils';
import { getIdFromParsedUrlQuery } from '@/utils/StringUtils';

export interface IProps {
  initialBookData: IGetBookOneResponse;
}

/** 書籍詳細ページ */
const BookDetailPage: NextPage<IProps> = (props) => {
  const { initialBookData } = props;
  const router = useRouter();

  /** 書籍ID */
  const bookId = useMemo<string>(() => {
    return getIdFromParsedUrlQuery(router.query);
  }, [router.query]);

  /** 書籍詳細取得ロジック */
  const { loading, error, refetch } = useGetBookOne(bookId, initialBookData);

  /** 書籍詳細 */
  const book = useRecoilValue<IBook>(bookOneState);

  /** 書籍編集ロジック */
  const { updateBookParams, setInitialValues, changeValue, updateBook } =
    useUpdateBook(book);

  /** 編集モーダル制御 */
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();

  /** 編集ボタン押下 */
  const handleClickEdit = useCallback(() => {
    setInitialValues();
    openModal();
  }, [setInitialValues, openModal]);

  /** 削除ボタン押下 */
  const handleClickDelete = useCallback(() => {
    // TODO 削除確認ダイアログを開く
    console.log('click delete.');
  }, []);

  const onClickModalSubmit = useCallback(async () => {
    await updateBook();
    await refetch();
    closeModal();
  }, [updateBook, refetch, closeModal]);

  // TODO ローディング
  if (loading) return <p>Loading...</p>;

  // TODO エラーハンドリング
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div>
      <PageHeading title={book.id} />
      <div className="mx-auto mt-16 w-1/2">
        <BookDetailTable book={book} />
      </div>
      <div className="flex justify-between mx-auto mt-16 w-24">
        <IconButton
          variant="outline"
          colorScheme="green"
          aria-label="Edit Button"
          icon={<EditIcon />}
          onClick={handleClickEdit}
        />
        <IconButton
          variant="outline"
          colorScheme="red"
          aria-label="Delete Button"
          icon={<DeleteIcon />}
          onClick={handleClickDelete}
        />
      </div>
      <div className="flex justify-center items-center mt-16">
        <ArrowBackIcon />
        <Link href={PAGE_URL.BOOKS}>
          <a className="ml-2 hover:underline">一覧に戻る</a>
        </Link>
      </div>
      <EditBookModal
        isOpen={isModalOpen}
        type="update"
        onSubmit={onClickModalSubmit}
        onCancel={closeModal}
        params={updateBookParams}
        onChangeName={(value: string) => changeValue('name', value)}
        onChangeOutline={(value: string) => changeValue('outline', value)}
        onChangeAuthor={(value: string) => changeValue('author', value)}
        onChangePublisher={(value: string) => changeValue('publisher', value)}
        onChangeCategory={(value: string) => changeValue('category', value)}
        onChangePrice={(value: number) => changeValue('price', value)}
        onChangeReleasedAt={(value: string) => changeValue('releasedAt', value)}
      />
    </div>
  );
};

export default BookDetailPage;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context,
) => {
  const bookId = getIdFromParsedUrlQuery(context.query);

  const response = await apolloClient.query<IGetBookOneResponse>({
    query: getBookOneQuery(bookId),
  });

  return {
    props: {
      initialBookData: response.data,
    },
  };
};
