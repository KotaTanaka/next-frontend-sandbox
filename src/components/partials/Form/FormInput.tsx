import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useCallback } from 'react';

interface Props {
  value: string | number;
  label: string;
  placeholder?: string;
  required?: boolean;
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
    required = false,
    number = false,
    marginX,
    marginY,
    onChange,
  } = props;

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

  return (
    <FormControl isRequired={required} marginX={marginX} marginY={marginY}>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder ?? label}
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default FormInput;
