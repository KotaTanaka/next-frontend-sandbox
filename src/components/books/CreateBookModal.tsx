import { Button } from '@chakra-ui/react';

import AppModal from '@/components/partials/AppModal';
import FormInput from '@/components/partials/Form/FormInput';
import { ICreateBookBody } from '@/interfaces/request/book';

interface Props {
  isOpen: boolean;
  onSubmit: () => void;
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
    onSubmit,
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

  return (
    <AppModal isOpen={isOpen} title="書籍登録" onClose={onCancel}>
      <FormInput
        value={params.name}
        label="タイトル"
        required
        marginY="8px"
        onChange={onChangeName}
      />
      <FormInput
        value={params.outline}
        label="あらすじ"
        required
        marginY="8px"
        onChange={onChangeOutline}
      />
      <FormInput
        value={params.author}
        label="著者"
        required
        marginY="8px"
        onChange={onChangeAuthor}
      />
      <FormInput
        value={params.publisher}
        label="出版社"
        required
        marginY="8px"
        onChange={onChangePublisher}
      />
      <FormInput
        value={params.category}
        label="カテゴリ"
        required
        marginY="8px"
        onChange={onChangeCategory}
      />
      <FormInput
        value={params.price}
        label="価格"
        required
        number
        marginY="8px"
        onChange={onChangePrice}
      />
      <FormInput
        value={params.releasedAt}
        label="発売日"
        required
        marginY="8px"
        onChange={onChangeReleasedAt}
      />
      <div className="mt-8 text-right">
        <Button onClick={onSubmit}>登録</Button>
      </div>
    </AppModal>
  );
};

export default CreateBookModal;
