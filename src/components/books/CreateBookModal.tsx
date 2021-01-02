import React from 'react';
import { DatePicker, Form, Input, InputNumber, Modal } from 'antd';
import moment from 'moment';
import { ICreateBookBody } from '@/interfaces/request/book';

interface Props {
  isOpen: boolean;
  onOk: () => Promise<void>;
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

  const handleChangeName = (e) => onChangeName(e.target.value);
  const handleChangeOutline = (e) => onChangeOutline(e.target.value);
  const handleChangeAuthor = (e) => onChangeAuthor(e.target.value);
  const handleChangePublisher = (e) => onChangePublisher(e.target.value);
  const handleChangeCategory = (e) => onChangeCategory(e.target.value);
  const handleChangePrice = (value) => onChangePrice(value);
  const handleChangeReleasedAt = (_, dateString) => {
    onChangeReleasedAt(dateString);
  };

  return (
    <Modal title="書籍登録" visible={isOpen} onOk={onOk} onCancel={onCancel}>
      <Form>
        <Form.Item label="タイトル" rules={[{ required: true }]}>
          <Input
            placeholder="タイトル"
            value={params.name}
            onChange={handleChangeName}
          />
        </Form.Item>
        <Form.Item label="あらすじ" rules={[{ required: true }]}>
          <Input.TextArea
            placeholder="あらすじ"
            value={params.outline}
            onChange={handleChangeOutline}
          />
        </Form.Item>
        <Form.Item label="著者" rules={[{ required: true }]}>
          <Input
            placeholder="著者"
            value={params.author}
            onChange={handleChangeAuthor}
          />
        </Form.Item>
        <Form.Item label="出版社" rules={[{ required: true }]}>
          <Input
            placeholder="出版社"
            value={params.publisher}
            onChange={handleChangePublisher}
          />
        </Form.Item>
        <Form.Item label="カテゴリー" rules={[{ required: true }]}>
          <Input
            placeholder="カテゴリー"
            value={params.category}
            onChange={handleChangeCategory}
          />
        </Form.Item>
        <Form.Item label="価格" rules={[{ required: true }]}>
          <InputNumber
            placeholder="価格"
            min={0}
            value={params.price}
            onChange={handleChangePrice}
          />
        </Form.Item>
        <Form.Item label="発売日" rules={[{ required: true }]}>
          <DatePicker
            defaultValue={moment('2020-04-01', 'YYYY-MM-DD')}
            onChange={handleChangeReleasedAt}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBookModal;
