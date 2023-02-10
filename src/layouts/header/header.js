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
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.02),0 1px 2px 0 rgba(0, 0, 0, 0.06)"
      px={10}
      align="center"
    >
      <BreadCrumb />
    </Flex>
  );
};

export default memo(Header);
