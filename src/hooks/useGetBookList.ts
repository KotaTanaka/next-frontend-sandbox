import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { bookListState } from '@/atoms/book';
import { IBook, IGetBookListResponse } from '@/interfaces/response/book';

/** books query */
export const booksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

/** 書籍一覧取得フック */
const useGetBookList = (serverData?: IGetBookListResponse) => {
  const {
    data: clientData,
    error,
    refetch,
  } = useQuery<IGetBookListResponse>(booksQuery);

  const setBookList = useSetRecoilState<IBook[]>(bookListState);

  // サーバーサイドで取得したデータをセット
  useEffect(() => {
    if (serverData) {
      setBookList(serverData.books);
    }
  }, [serverData]);

  // クライアントサイドで取得したデータをセット
  useEffect(() => {
    if (clientData) {
      setBookList(clientData.books);
    }
  }, [clientData]);

  return {
    loading: !clientData && !serverData,
    error,
    refetch,
  };
};

export default useGetBookList;
