import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { bookListState } from '@/atoms/book';
import { IGetBookListResponse } from '@/interfaces/response/book';

const booksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

/** 書籍一覧取得フック */
export const useGetBookList = () => {
  // prettier-ignore
  const { loading, error, data, refetch } = useQuery<IGetBookListResponse>(booksQuery);

  const setBookList = useSetRecoilState<IGetBookListResponse>(bookListState);

  useEffect(() => {
    if (data) {
      setBookList(data);
    }
  }, [data]);

  return { loading, error, refetch };
};
