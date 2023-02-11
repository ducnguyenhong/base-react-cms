import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import BreadCrumb from './breadcrumb';
import UserInfo from './user-info';

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
      justify="space-between"
      align="center"
    >
      <BreadCrumb />
      <UserInfo />
    </Flex>
  );
};

export default memo(Header);
