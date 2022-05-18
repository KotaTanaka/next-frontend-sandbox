import { gql, useMutation } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { createBookParamsState } from '@/atoms/book';
import useToast from '@/hooks/useToast';
import type { ICreateBookBody } from '@/interfaces/request/book';

const createBookMutation = gql`
  mutation createBook($data: CreateBookBody!) {
    createBook(data: $data) {
      id
    }
  }
`;

/** 書籍登録フック */
const useCreateBook = () => {
  const [createBookFunction] = useMutation(createBookMutation);
  const { toastSuccess } = useToast();

  // prettier-ignore
  const [createBookParams, setCreateBookParams] = useRecoilState<ICreateBookBody>(createBookParamsState);
  const resetCreateBookParams = useResetRecoilState(createBookParamsState);

  const changeValue = (
    name: keyof ICreateBookBody,
    value: ICreateBookBody[keyof ICreateBookBody],
  ) => {
    setCreateBookParams((currentState) => ({ ...currentState, [name]: value }));
  };

  const createBook = useCallback(async () => {
    await createBookFunction({ variables: { data: createBookParams } });
    resetCreateBookParams();
    toastSuccess('登録しました');
  }, [createBookParams, createBookFunction, resetCreateBookParams]);

  return {
    createBookParams,
    resetValues: resetCreateBookParams,
    changeValue,
    createBook,
  };
};

export default useCreateBook;
