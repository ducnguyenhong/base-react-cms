import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import BreadCrumb from './breadcrumb';

const Header = () => {
  return (
    <Flex
      pos="sticky"
      top={0}
      left={0}
      bg="#FFF"
      zIndex={100}
      w="full"
      h="64px"
      borderBottom="1px solid #e6e6e6"
      px={10}
      align="center"
    >
      <BreadCrumb />
    </Flex>
  );
};

export default memo(Header);
