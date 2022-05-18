import { gql, useMutation } from '@apollo/client';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { updateBookParamsState } from '@/atoms/book';
import type { IUpdateBookBody } from '@/interfaces/request/book';
import type { IBook } from '@/interfaces/response/book';

const updateBookMutation = gql`
  mutation updateBook($data: UpdateBookBody!, $id: String!) {
    updateBook(data: $data, id: $id) {
      id
    }
  }
`;

/** 書籍編集フック */
const useUpdateBook = (book: IBook) => {
  const [updateBookFunction] = useMutation(updateBookMutation);

  // prettier-ignore
  const [updateBookParams, setUpdateBookParams] = useRecoilState<IUpdateBookBody>(updateBookParamsState);

  const setInitialValues = () => {
    setUpdateBookParams({
      name: book.name,
      outline: book.outline,
      author: book.author,
      publisher: book.publisher,
      category: book.category,
      price: book.price,
      releasedAt: book.releasedAt,
    });
  };

  const changeValue = (
    name: keyof IUpdateBookBody,
    value: IUpdateBookBody[keyof IUpdateBookBody],
  ) => {
    setUpdateBookParams((currentState) => ({ ...currentState, [name]: value }));
  };

  const updateBook = async () =>
    updateBookFunction({
      variables: { data: updateBookParams, id: book.id },
    });

  return {
    updateBookParams,
    setInitialValues,
    changeValue,
    updateBook,
  };
};

export default useUpdateBook;
