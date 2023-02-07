import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from './menu.data';

const Menu = () => {
  return (
    <Flex direction="column" gap={10} p={5}>
      {MENU_DATA.map((frame) => {
        const { menu, section } = frame;
        return (
          <Box key={section}>
            <Text textTransform="uppercase" color="#4c4e6f">
              {section}
            </Text>
            <Flex>
              {menu.map((item) => {
                const { route, icon, title } = item;
                return (
                  <Link to={route} key={title}>
                    <Flex align="center" gap={3}>
                      <Flex w={5}>
                        <Icon as={icon} />
                      </Flex>
                      <Text as="span" color="#a2a3b7">
                        {title}
                      </Text>
                    </Flex>
                  </Link>
                );
              })}
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default memo(Menu);
