import { Flex } from '@chakra-ui/react';
import { useScrollTop } from 'utils/helper';

const Example = () => {
  useScrollTop();

  return <Flex>Home Page</Flex>;
};

export default Example;
