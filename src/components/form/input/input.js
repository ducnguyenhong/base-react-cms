import { Input as ChakraInput } from '@chakra-ui/react';
import { memo } from 'react';

const Input = (props) => {
  return (
    <ChakraInput {...props} h={10} borderColor="#CCC" _focus={{ border: 'none' }} _hover={{ borderColor: '#b3b3b3' }} />
  );
};

export default memo(Input);
