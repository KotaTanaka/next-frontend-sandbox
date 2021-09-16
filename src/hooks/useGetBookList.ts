import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { bookListState } from '@/atoms/book';
import { IGetBookListResponse } from '@/interfaces/response/book';

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

  const setBookList = useSetRecoilState<IGetBookListResponse>(bookListState);

  // サーバーサイドで取得したデータをセット
  useEffect(() => {
    if (serverData) {
      setBookList(serverData);
    }
  }, [serverData]);

  // クライアントサイドで取得したデータをセット
  useEffect(() => {
    if (clientData) {
      setBookList(clientData);
    }
  }, [clientData]);

  return {
    loading: !clientData && !serverData,
    error,
    refetch,
  };
};

export default useGetBookList;
