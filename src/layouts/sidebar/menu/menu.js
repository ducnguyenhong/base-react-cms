import { Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { MENU_DATA } from './menu.data';
import MenuItem from './menu.item';

const Menu = () => {
  return (
    <Flex direction="column" gap={12} py={5} w="full">
      {MENU_DATA.map((frame) => {
        const { menu, section } = frame;
        return (
          <Box key={section}>
            <Text textTransform="uppercase" color="#4c4e6f" fontSize={13} mb={3} px={5}>
              {section}
            </Text>
            <Flex direction="column">
              {menu.map((item) => (
                <MenuItem key={item.title} item={item} />
              ))}
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default memo(Menu);
