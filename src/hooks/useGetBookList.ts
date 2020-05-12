import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
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
  const { loading, error, data } = useQuery<IGetBookListResponse>(booksQuery);

  return { loading, error, data };
};
