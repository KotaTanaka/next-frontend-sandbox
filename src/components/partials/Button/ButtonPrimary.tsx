import { Button } from '@chakra-ui/react';

interface Props {
  label: string;
  width?: string;
  height?: string;
  fontSize?: string;
  onClick?: () => void;
}

/** ボタン */
const ButtonPrimary: React.FC<Props> = (props) => {
  const { label, width, height, fontSize, onClick } = props;

  return (
    <Button
      width={width ?? 'full'}
      height={height ?? '40px'}
      fontSize={fontSize ?? '14px'}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ButtonPrimary;
