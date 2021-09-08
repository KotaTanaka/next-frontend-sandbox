import { useMemo } from 'react';

import AppModal from '@/components/partials/AppModal';
import ButtonPrimary from '@/components/partials/Button/ButtonPrimary';
import FormInput from '@/components/partials/Form/FormInput';
import useValidation from '@/hooks/useValidation';
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

  const { convertRulesToErrors } = useValidation();

  /** 登録ボタンの活性判定 */
  // prettier-ignore
  const isSubmitButtonClickable = useMemo<boolean>(() => {
    const nameErrors = convertRulesToErrors(['required'], params.name);
    const outlineErrors = convertRulesToErrors(['required'], params.outline);
    const authorErrors = convertRulesToErrors(['required'], params.author);
    const publisherErrors = convertRulesToErrors(['required'], params.publisher);
    const categoryErrors = convertRulesToErrors(['required'], params.category);
    const priceErrors = convertRulesToErrors(['required'], params.price);
    const releasedAtErrors = convertRulesToErrors(['required'], params.releasedAt);

    return [...nameErrors, ...outlineErrors, ...authorErrors, ...publisherErrors, ...categoryErrors, ...priceErrors, ...releasedAtErrors].length === 0;
  }, [params]);

  return (
    <AppModal isOpen={isOpen} title="書籍登録" onClose={onCancel}>
      <FormInput
        value={params.name}
        label="タイトル"
        rules={['required']}
        marginY="8px"
        onChange={onChangeName}
      />
      <FormInput
        value={params.outline}
        label="あらすじ"
        rules={['required']}
        marginY="8px"
        onChange={onChangeOutline}
      />
      <FormInput
        value={params.author}
        label="著者"
        rules={['required']}
        marginY="8px"
        onChange={onChangeAuthor}
      />
      <FormInput
        value={params.publisher}
        label="出版社"
        rules={['required']}
        marginY="8px"
        onChange={onChangePublisher}
      />
      <FormInput
        value={params.category}
        label="カテゴリ"
        rules={['required']}
        marginY="8px"
        onChange={onChangeCategory}
      />
      <FormInput
        value={params.price}
        label="価格"
        rules={['required']}
        number
        marginY="8px"
        onChange={onChangePrice}
      />
      <FormInput
        value={params.releasedAt}
        label="発売日"
        rules={['required']}
        marginY="8px"
        onChange={onChangeReleasedAt}
      />
      <div className="mt-8 text-right">
        <ButtonPrimary
          label="登録"
          disabled={!isSubmitButtonClickable}
          onClick={onSubmit}
        />
      </div>
    </AppModal>
  );
};

export default CreateBookModal;
