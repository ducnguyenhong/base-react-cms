import { Flex, Heading } from '@chakra-ui/react';
import { MENU_ROUTE_DATA } from 'layouts/sidebar/menu/menu.data';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

const Section = () => {
  const location = useLocation();
  const { pathname } = location;
  const currentRoute = MENU_ROUTE_DATA.find((item) => item.route === pathname);

  if (!currentRoute) {
    return null;
  }

  return (
    <Flex h={16} w="full" borderBottom="1px solid #e6e6e6" px={8} align="center">
      <Heading as="h3" fontSize={15} textTransform="uppercase">
        {currentRoute.title}
      </Heading>
    </Flex>
  );
};

export default memo(Section);
