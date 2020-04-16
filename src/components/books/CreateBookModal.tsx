import { NextComponentType } from 'next';
import { DatePicker, Form, Input, Modal } from 'antd';

interface Props {
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
}

/** 書籍登録モーダル */
const CreateBookModal: NextComponentType<{}, {}, Props> = (props: Props) => {
  const { isOpen, onOk, onCancel } = props;

  return (
    <Modal title="書籍登録" visible={isOpen} onOk={onOk} onCancel={onCancel}>
      <Form>
        <Form.Item label="タイトル" rules={[{ required: true }]}>
          <Input placeholder="タイトル" />
        </Form.Item>
        <Form.Item label="あらすじ" rules={[{ required: true }]}>
          <Input.TextArea placeholder="あらすじ" />
        </Form.Item>
        <Form.Item label="著者" rules={[{ required: true }]}>
          <Input placeholder="Basic usage" />
        </Form.Item>
        <Form.Item label="出版社" rules={[{ required: true }]}>
          <Input placeholder="Basic usage" />
        </Form.Item>
        <Form.Item label="カテゴリー" rules={[{ required: true }]}>
          <Input placeholder="Basic usage" />
        </Form.Item>
        <Form.Item label="価格" rules={[{ required: true }]}>
          <Input placeholder="Basic usage" />
        </Form.Item>
        <Form.Item label="発売日" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateBookModal;
