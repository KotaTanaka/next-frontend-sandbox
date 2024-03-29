import { DocumentNode, gql, useQuery } from '@apollo/client';
import { useEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';

import { bookOneState } from '@/atoms/book';
import { IBook, IGetBookOneResponse } from '@/interfaces/response/book';

/** book query */
export const getBookOneQuery = (id: string) => {
  return gql`
    {
      book(id: "${id}") {
        id
        name
        outline
        author
        publisher
        category
        price
        releasedAt
        createdAt
        updatedAt
      }
    }
  `;
};

/** 書籍詳細取得フック */
const useGetBookOne = (id: string, serverData?: IGetBookOneResponse) => {
  const bookOneQuery = useMemo<DocumentNode>(() => {
    return getBookOneQuery(id);
  }, [id]);

  const {
    data: clientData,
    error,
    refetch,
  } = useQuery<IGetBookOneResponse>(bookOneQuery);

  const setBookOne = useSetRecoilState<IBook>(bookOneState);

  // サーバーサイドで取得したデータをセット
  useEffect(() => {
    if (serverData) {
      setBookOne(serverData.book);
    }
  }, [serverData]);

  // クライアントサイドで取得したデータをセット
  useEffect(() => {
    if (clientData) {
      setBookOne(clientData.book);
    }
  }, [clientData]);

  return {
    loading: !clientData && !serverData,
    error,
    refetch,
  };
};

export default useGetBookOne;
