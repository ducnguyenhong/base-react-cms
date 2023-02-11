import { createStandaloneToast } from '@chakra-ui/react';

export const showToast = (config) => {
  const { content, status = 'info', title } = config;
  const { toast } = createStandaloneToast();
  return toast({
    description: content,
    status,
    title,
    duration: 4000,
    isClosable: true,
    position: 'top-right'
  });
};
