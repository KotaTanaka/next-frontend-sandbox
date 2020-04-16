import { useState } from 'react';

// from app
import { ICreateBookBody } from '@/interfaces/book';

/** 書籍登録フック */
export const useCreateBook = () => {
  // prettier-ignore
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const [createBookParams, setCreateBookParams] = useState<ICreateBookBody>({
    name: '',
    outline: '',
    author: '',
    publisher: '',
    category: '',
    price: 0,
    releasedAt: '2020-04-01',
  });

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

  const createBook = () => {
    closeModal();
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
    createBook,
  };
};
