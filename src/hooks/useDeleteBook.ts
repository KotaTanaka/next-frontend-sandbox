import { gql, useMutation } from '@apollo/client';

const deleteBookMutation = gql`
  mutation deleteBook($id: String!) {
    deleteBook(id: $id)
  }
`;

/** 書籍削除フック */
const useDeleteBook = (id: string) => {
  const [deleteBookFunction] = useMutation(deleteBookMutation);

  const deleteBook = async () => deleteBookFunction({ variables: { id } });

  return {
    deleteBook,
  };
};

export default useDeleteBook;
