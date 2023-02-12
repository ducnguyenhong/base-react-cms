import { Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { memo, useCallback } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { showSidebarAtom } from 'state-manage/recoil';
import { useMediaQuery } from 'utils/helper';
import BreadCrumb from './breadcrumb';
import UserInfo from './user-info';

const Header = () => {
  const isMobileAndTablet = useMediaQuery('(max-width: 992px)');
  const setShowSidebar = useSetRecoilState(showSidebarAtom);

  const onToggleSidebar = useCallback(() => setShowSidebar((prev) => !prev), [setShowSidebar]);

  return (
    <Flex
      pos="sticky"
      top={0}
      left={0}
      bg={isMobileAndTablet ? 'main.0' : '#FFF'}
      zIndex={100}
      w="full"
      h="64px"
      borderBottom={{ xs: 'none', lg: '1px solid #e6e6e6' }}
      px={{ xs: 4, lg: 10 }}
      justify="space-between"
      align="center"
    >
      {isMobileAndTablet ? (
        <Flex w="full" align="center" justify="space-between">
          <Button
            onClick={onToggleSidebar}
            bgColor="transparent"
            p={0}
            minW={0}
            minH={0}
            _hover={{ bgColor: 'transparent' }}
            _active={{ bgColor: 'transparent' }}
          >
            <Icon as={HiOutlineMenu} color="#ccc" fontSize={28} />
          </Button>

          <Link to="/">
            <Heading as="h3" fontSize={20} color="#e6e6e6">
              CMS Pro
            </Heading>
          </Link>

          <UserInfo />
        </Flex>
      ) : (
        <>
          <BreadCrumb />
          <UserInfo />
        </>
      )}
    </Flex>
  );
};

export default memo(Header);
