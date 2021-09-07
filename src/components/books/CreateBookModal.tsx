import React, { useCallback } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react';
import { ICreateBookBody } from '@/interfaces/request/book';

interface Props {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
  params: ICreateBookBody;
  onChangeName: (value: string) => void;
  onChangeOutline: (value: string) => void;
  onChangeAuthor: (value: string) => void;
  onChangePublisher: (value: string) => void;
  onChangeCategory: (value: string) => void;
  onChangePrice: (value: number) => void;
  onChangeReleasedAt: (value: string) => void;
}

/** 書籍登録モーダル */
const CreateBookModal: React.FC<Props> = (props) => {
  const {
    isOpen,
    onOk,
    onCancel,
    params,
    onChangeName,
    onChangeOutline,
    onChangeAuthor,
    onChangePublisher,
    onChangeCategory,
    onChangePrice,
    onChangeReleasedAt,
  } = props;

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChangeName(e.target.value),
    [onChangeName],
  );

  const handleChangeOutline = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChangeOutline(e.target.value),
    [onChangeOutline],
  );

  const handleChangeAuthor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChangeAuthor(e.target.value),
    [onChangeAuthor],
  );

  const handleChangePublisher = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChangePublisher(e.target.value),
    [onChangePublisher],
  );

  const handleChangeCategory = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChangeCategory(e.target.value),
    [onChangeCategory],
  );

  const handleChangePrice = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = Number(e.target.value);
      if (!Number.isNaN(targetValue)) {
        onChangePrice(targetValue);
      }
    },
    [onChangePrice],
  );

  const handleChangeReleasedAt = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChangeReleasedAt(e.target.value),
    [onChangeReleasedAt],
  );

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>書籍登録</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired marginTop="8px">
            <FormLabel>タイトル</FormLabel>
            <Input
              placeholder="タイトル"
              value={params.name}
              onChange={handleChangeName}
            />
          </FormControl>
          <FormControl isRequired marginTop="8px">
            <FormLabel>あらすじ</FormLabel>
            <Input
              placeholder="あらすじ"
              value={params.outline}
              onChange={handleChangeOutline}
            />
          </FormControl>
          <FormControl isRequired marginTop="8px">
            <FormLabel>著者</FormLabel>
            <Input
              placeholder="著者"
              value={params.author}
              onChange={handleChangeAuthor}
            />
          </FormControl>
          <FormControl isRequired marginTop="8px">
            <FormLabel>出版社</FormLabel>
            <Input
              placeholder="出版社"
              value={params.publisher}
              onChange={handleChangePublisher}
            />
          </FormControl>
          <FormControl isRequired marginTop="8px">
            <FormLabel>カテゴリ</FormLabel>
            <Input
              placeholder="カテゴリ"
              value={params.category}
              onChange={handleChangeCategory}
            />
          </FormControl>
          <FormControl isRequired marginTop="8px">
            <FormLabel>価格</FormLabel>
            <Input
              placeholder="価格"
              value={params.price}
              onChange={handleChangePrice}
            />
          </FormControl>
          <FormControl isRequired marginTop="8px">
            <FormLabel>発売日</FormLabel>
            <Input
              placeholder="発売日"
              value={params.releasedAt}
              onChange={handleChangeReleasedAt}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onOk}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateBookModal;
