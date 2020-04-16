import { useState } from 'react';

/** 書籍登録フック */
export const useCreateBook = () => {
  // prettier-ignore
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const openModal = () => setIsCreateModalOpen(true);

  const closeModal = () => setIsCreateModalOpen(false);

  const createBook = () => {
    closeModal();
  };

  return { isCreateModalOpen, openModal, closeModal, createBook };
};
