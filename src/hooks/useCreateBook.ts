import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { createBookParamsState } from '@/atoms/book';
import { ICreateBookBody } from '@/interfaces/request/book';

const createBookMutation = gql`
  mutation createBook($data: CreateBookBody!) {
    createBook(data: $data) {
      id
    }
  }
`;

/** 書籍登録フック */
const useCreateBook = () => {
  const [createBook] = useMutation(createBookMutation);

  // prettier-ignore
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  // prettier-ignore
  const [createBookParams, setCreateBookParams] = useRecoilState<ICreateBookBody>(createBookParamsState);

  const openModal = () => setIsCreateModalOpen(true);

  const closeModal = () => setIsCreateModalOpen(false);

  const changeName = (value: string) => {
    setCreateBookParams((currentState) => ({ ...currentState, name: value }));
  };

  const changeOutline = (value: string) => {
    setCreateBookParams((currentState) => ({
      ...currentState,
      outline: value,
    }));
  };

  const changeAuthor = (value: string) => {
    setCreateBookParams((currentState) => ({ ...currentState, author: value }));
  };

  const changePublisher = (value: string) => {
    setCreateBookParams((currentState) => ({
      ...currentState,
      publisher: value,
    }));
  };

  const changeCategory = (value: string) => {
    setCreateBookParams((currentState) => ({
      ...currentState,
      category: value,
    }));
  };

  const changePrice = (value: number) => {
    setCreateBookParams((currentState) => ({ ...currentState, price: value }));
  };

  const changeReleasedAt = (value: string) => {
    setCreateBookParams((currentState) => ({
      ...currentState,
      releasedAt: value,
    }));
  };

  const sendCreateBook = async () => {
    await createBook({ variables: { data: createBookParams } });
  };

  const resetCreateBookParams = () => {
    setCreateBookParams({
      name: '',
      outline: '',
      author: '',
      publisher: '',
      category: '',
      price: 0,
      releasedAt: '2020-04-01',
    });
  };

  return {
    isCreateModalOpen,
    openModal,
    closeModal,
    createBookParams,
    changeName,
    changeOutline,
    changeAuthor,
    changePublisher,
    changeCategory,
    changePrice,
    changeReleasedAt,
    resetCreateBookParams,
    sendCreateBook,
  };
};

export default useCreateBook;
