import { Box, Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { showSidebarAtom } from 'state-manage/recoil';
import { MENU_DATA } from './menu.data';
import MenuItem from './menu.item';

const Menu = () => {
  const showSidebar = useRecoilValue(showSidebarAtom);

  return (
    <Flex direction="column" gap={12} py={5} w="full">
      {MENU_DATA.map((frame) => {
        const { menu, section } = frame;
        return (
          <Box key={section}>
            <Text
              textAlign={showSidebar ? 'left' : 'center'}
              textTransform="uppercase"
              color="#4c4e6f"
              fontSize={13}
              mb={3}
              px={5}
              h={5}
            >
              {showSidebar ? section : '...'}
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
