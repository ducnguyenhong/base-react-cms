import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import Logo from 'assets/images/logo.png';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import packageJson from '../../../package.json';
import Menu from './menu';

const Sidebar = () => {
  return (
    <Flex direction="column" w={80} h="100vh" bgColor="main.1" color="#f2f2f2">
      <Flex h="64px" w="full" bgColor="main.2">
        <Link to="/" style={{ width: '100%', height: '100%' }}>
          <Flex align="center" justify="center" gap={3} h="full">
            <Image src={Logo} boxSize={7} opacity={0.95} />
            <Heading as="h2" fontSize={18} fontWeight={600}>
              CMS Website
            </Heading>
          </Flex>
        </Link>
      </Flex>
      <Flex flex={1} w="full" overflowY="auto">
        <Menu />
      </Flex>
      <Flex h="45px" w="full" borderTop="1px solid #333" align="center" justify="center" fontSize={16}>
        <Text>
          Version:{' '}
          <Text as="span" fontWeight={500}>
            {packageJson.version}
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default memo(Sidebar);
