import { Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';
import packageJson from '../../../package.json';
import Menu from './menu';

const Sidebar = () => {
  return (
    <Flex direction="column" w={80} h="100vh" bgColor="main.1" color="#f2f2f2">
      <Flex h="64px" w="full" bgColor="main.2" align="center" justify="center">
        <Heading as="h2" fontSize={20}>
          CMS
        </Heading>
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
