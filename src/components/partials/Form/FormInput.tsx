import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

import { ValidationRule } from '@/@types/components';
import useValidation from '@/hooks/useValidation';

interface Props {
  value: string | number;
  label: string;
  placeholder?: string;
  helperText?: string;
  rules?: ValidationRule[];
  number?: boolean;
  marginX?: string;
  marginY?: string;
  onChange: (value: string | number) => void;
}

/** テキスト入力フォーム */
const FormInput: React.FC<Props> = (props) => {
  const {
    value,
    label,
    placeholder,
    helperText,
    rules = [],
    number = false,
    marginX,
    marginY,
    onChange,
  } = props;

  const { convertRulesToErrors } = useValidation();

  /** エラーメッセージ */
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  /** 入力処理 */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (number) {
        const targetValue = Number(e.target.value);
        if (!Number.isNaN(targetValue)) {
          onChange(targetValue);
        }
      } else {
        onChange(e.target.value);
      }
    },
    [onChange],
  );

  /** フォーカスアウト時の処理 */
  const handleBlur = useCallback(() => {
    // バリデーション実行
    const errors = convertRulesToErrors(rules, value);
    setErrorMessages(errors);
  }, [rules, value, convertRulesToErrors]);

  return (
    <FormControl
      isRequired={rules.includes('required')}
      marginX={marginX}
      marginY={marginY}
    >
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder ?? label}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errorMessages.length > 0 &&
        errorMessages.map((error, i) => (
          <div key={i} className="mt-1 ml-2 text-xs text-red-400">
            {error}
          </div>
        ))}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default FormInput;
