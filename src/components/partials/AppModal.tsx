import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  title: string;
  width?: string;
  onClose?: () => void;
}

/** 共通モーダル */
const AppModal: React.FC<Props> = (props) => {
  const { isOpen, title, width, onClose, children } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth={width ?? '480px'}>
        <ModalHeader textAlign="center">{title}</ModalHeader>
        {onClose && <ModalCloseButton />}
        <ModalBody paddingX="32px" paddingBottom="32px">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AppModal;
