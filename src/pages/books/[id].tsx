import { IconButton } from '@chakra-ui/button';
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { bookOneState } from '@/atoms/book';
import BookDetailTable from '@/components/books/BookDetailTable';
import PageHeading from '@/components/partials/PageHeading';
import { PAGE_URL } from '@/constants';
import useGetBookOne, { getBookOneQuery } from '@/hooks/useGetBookOne';
import { IBook, IGetBookOneResponse } from '@/interfaces/response/book';
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
  const { loading, error } = useGetBookOne(bookId, initialBookData);

  /** 書籍詳細 */
  const book = useRecoilValue<IBook>(bookOneState);

  /** 編集ボタン押下 */
  const handleClickEdit = useCallback(() => {
    // TODO 編集モーダルを開く
    console.log('click edit.');
  }, []);

  /** 削除ボタン押下 */
  const handleClickDelete = useCallback(() => {
    // TODO 削除確認ダイアログを開く
    console.log('click delete.');
  }, []);

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
