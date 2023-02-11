import { Flex, Icon, Text } from '@chakra-ui/react';
import { MENU_ROUTE_DATA } from 'layouts/sidebar/menu/menu.data';
import { memo } from 'react';
import { FaHome } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const currentRoute = MENU_ROUTE_DATA.find((item) => item.route === pathname);

  if (!currentRoute) {
    return null;
  }

  const { route, title, parent: parentLevel2 } = currentRoute;
  const parentLevel1 = parentLevel2?.parent;

  return (
    <Flex align="center" gap={4}>
      <Link to="/">
        <Icon as={FaHome} fontSize={18} mt={1.5} color="main.1" />
      </Link>

      <Icon as={HiChevronRight} fontSize={18} color="#999" />

      {parentLevel1 && (
        <>
          <Text as="span" fontWeight={500}>
            {parentLevel1.title}
          </Text>
          <Icon as={HiChevronRight} fontSize={18} color="#999" />
        </>
      )}

      {parentLevel2 && (
        <>
          <Text as="span" fontWeight={500}>
            {parentLevel2.title}
          </Text>
          <Icon as={HiChevronRight} fontSize={18} color="#999" />
        </>
      )}

      <Link to={route}>
        <Text as="span" fontWeight={600}>
          {title}
        </Text>
      </Link>
    </Flex>
  );
};

export default memo(BreadCrumb);
