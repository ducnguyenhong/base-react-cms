import { Flex } from '@chakra-ui/react';
import { MENU_ROUTE_DATA } from 'layouts/sidebar/menu/menu.data';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const currentRoute = MENU_ROUTE_DATA.find((item) => item.route === pathname);

  if (!currentRoute) {
    return null;
  }

  return <Flex>{currentRoute.title}</Flex>;
};

export default memo(BreadCrumb);
