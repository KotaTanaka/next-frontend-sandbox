import { useToast as useChakraToast } from '@chakra-ui/react';

/** トースト */
const useToast = () => {
  const toast = useChakraToast();

  const toastSuccess = (message: string) =>
    toast({
      title: message,
      status: 'success',
      duration: 4000,
    });

  const toastError = (message: string) =>
    toast({
      title: message,
      status: 'error',
      duration: 4000,
    });

  return {
    toastSuccess,
    toastError,
  };
};

export default useToast;
