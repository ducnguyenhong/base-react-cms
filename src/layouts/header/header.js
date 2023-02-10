import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import BreadCrumb from './breadcrumb';

const Header = () => {
  return (
    <Flex pos="sticky" top={0} left={0} bg="#FFF" w="full" h="64px" boxShadow="base" px={10} align="center">
      <BreadCrumb />
    </Flex>
  );
};

export default memo(Header);
