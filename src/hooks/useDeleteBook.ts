import { gql, useMutation } from '@apollo/client';

import useToast from '@/hooks/useToast';

const deleteBookMutation = gql`
  mutation deleteBook($id: String!) {
    deleteBook(id: $id)
  }
`;

/** 書籍削除フック */
const useDeleteBook = (id: string) => {
  const [deleteBookFunction] = useMutation(deleteBookMutation);
  const { toastSuccess } = useToast();

  const deleteBook = async () => {
    await deleteBookFunction({ variables: { id } });
    toastSuccess('削除しました');
  };

  return {
    deleteBook,
  };
};

export default useDeleteBook;
