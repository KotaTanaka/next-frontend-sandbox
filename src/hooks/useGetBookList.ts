import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
  const { loading, error, data } = useQuery(booksQuery);

  return { loading, error, data };
};
