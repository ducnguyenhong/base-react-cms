import { Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import Logo from 'assets/images/logo.png';
import { memo, useCallback } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { showSidebarAtom } from 'state-manage/recoil';
import packageJson from '../../../package.json';
import Menu from './menu';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom);

  const onToggleSidebar = useCallback(() => setShowSidebar((prev) => !prev), [setShowSidebar]);

  return (
    <Flex
      direction="column"
      pos="fixed"
      top={0}
      left={0}
      zIndex={10}
      w={showSidebar ? 80 : 20}
      h="100vh"
      bgColor="main.1"
      color="#f2f2f2"
      transitionDuration="300ms"
    >
      <Flex h="64px" w="full" bgColor="main.2" align="center" px={5} justify={showSidebar ? 'space-between' : 'center'}>
        {showSidebar && (
          <Link to="/" style={{ width: 'auto', height: 'auto' }}>
            <Flex align="center" justify="center" gap={3} h="full">
              <Image src={Logo} boxSize={7} opacity={0.95} />
              <Heading as="h2" fontSize={18} fontWeight={600} noOfLines={1}>
                CMS Pro
              </Heading>
            </Flex>
          </Link>
        )}

        <Button
          align="center"
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          _active={{ bgColor: 'transparent' }}
          p={2}
          minW={0}
          data-group
          transitionDuration="300ms"
          onClick={onToggleSidebar}
        >
          <Icon
            as={showSidebar ? HiChevronDoubleLeft : HiChevronDoubleRight}
            fontSize={21}
            color="#494B74"
            _groupHover={{ color: '#3699FF' }}
            transitionDuration="300ms"
          />
        </Button>
      </Flex>
      <Flex flex={1} w="full" overflowY="auto">
        <Menu />
      </Flex>
      <Flex h="45px" w="full" borderTop="1px solid #333" align="center" justify="center" fontSize={16}>
        <Text color="#808080" noOfLines={1}>
          {showSidebar && 'Version: '}
          <Text as="span" fontWeight={500}>
            {packageJson.version}
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default memo(Sidebar);
