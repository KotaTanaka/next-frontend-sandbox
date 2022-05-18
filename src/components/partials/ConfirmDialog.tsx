import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

interface Props {
  isOpen: boolean;
  title: string;
  description?: string;
  onOK: () => void;
  onCancel: () => void;
}

/** 確認ダイアログ */
const ConfirmDialog: React.FC<Props> = (props) => {
  const { isOpen, title, description, onOK, onCancel } = props;
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      isCentered
      leastDestructiveRef={cancelRef}
      onClose={onCancel}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        {description && <AlertDialogBody>{description}</AlertDialogBody>}
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onCancel}>
            キャンセル
          </Button>
          <Button colorScheme="red" ml={3} onClick={onOK}>
            OK
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
