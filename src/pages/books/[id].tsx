import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { bookOneState } from '@/atoms/book';
import PageHeading from '@/components/partials/PageHeading';
import useGetBookOne, { getBookOneQuery } from '@/hooks/useGetBookOne';
import { IGetBookOneResponse } from '@/interfaces/response/book';
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
  const book = useRecoilValue<IGetBookOneResponse>(bookOneState);

  // TODO ローディング
  if (loading) return <p>Loading...</p>;

  // TODO エラーハンドリング
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div>
      <PageHeading title={book.book.id} />
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
