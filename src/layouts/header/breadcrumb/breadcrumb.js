import { Flex, Icon, Text } from '@chakra-ui/react';
import { MENU_ROUTE_DATA } from 'layouts/sidebar/menu/menu.data';
import { memo, useCallback } from 'react';
import { FaHome } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'utils/helper';

const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const currentRoute = MENU_ROUTE_DATA.find((item) => {
    if (item.route === pathname) {
      return true;
    }
    if (pathname.includes('/detail')) {
      return item.route === `${pathname.split('/detail')[0]}/detail`;
    }
    return false;
  });
  const isMobile = useMediaQuery('(max-width: 576px)');

  const compactTitle = useCallback(
    (title, isPrimary) => {
      if (!isMobile) {
        return title;
      }
      if (isPrimary) {
        return title.length > 18 ? `${title.slice(0, 18)}...` : title;
      }
      return title.length > 6 ? `${title.slice(0, 6)}...` : title;
    },
    [isMobile]
  );

  const { route, title = '404', parent: parentLevel2 } = currentRoute || {};
  const parentLevel1 = parentLevel2?.parent;

  return (
    <Flex align="center" gap={{ xs: 2, md: 4 }} px={{ xs: 5, lg: 0 }} py={{ xs: 2, lg: 0 }}>
      <Link to="/">
        <Icon as={FaHome} fontSize={18} mt={1.5} color="main.1" />
      </Link>

      <Icon as={HiChevronRight} fontSize={18} color="#999" />

      {parentLevel1 && (
        <>
          <Text as="span" fontWeight={500} transitionDuration="200ms" _hover={{ color: 'link.1' }}>
            {compactTitle(parentLevel1.title)}
          </Text>
          <Icon as={HiChevronRight} fontSize={18} color="#999" />
        </>
      )}

      {parentLevel2 && (
        <>
          <Text as="span" fontWeight={500} transitionDuration="200ms" _hover={{ color: 'link.1' }}>
            {compactTitle(parentLevel2.title)}
          </Text>
          <Icon as={HiChevronRight} fontSize={18} color="#999" />
        </>
      )}

      <Link to={route}>
        <Text as="span" fontWeight={600} transitionDuration="200ms" _hover={{ color: 'link.1' }}>
          {compactTitle(title, true)}
        </Text>
      </Link>
    </Flex>
  );
};

export default memo(BreadCrumb);
