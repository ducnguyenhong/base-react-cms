import { Flex, Icon, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabControl = (props) => {
  const { data } = props;
  const location = useLocation();
  const { pathname } = location;
  const arrPath = pathname.split('/');
  const currentRoute = arrPath[arrPath.length - 1];

  if (!Array.isArray(data) || !data.length) {
    return null;
  }

  return (
    <Flex direction="column" gap={1.5} w="full">
      {data.map((item) => {
        const { route, icon, title } = item;
        const isActive = route === currentRoute;

        return (
          <Link to={route} key={route}>
            <Flex
              align="center"
              gap={3}
              bgColor={isActive ? '#F3F6F9' : 'transparent'}
              px={6}
              py={3.5}
              borderRadius={4}
              w="full"
              transitionDuration="300ms"
              _hover={{ bgColor: '#F3F6F9' }}
              data-group
            >
              <Icon
                as={icon}
                w={5}
                color={isActive ? 'link.1' : '#3f4254'}
                _groupHover={{ color: 'link.1' }}
                transitionDuration="300ms"
              />
              <Text
                fontWeight={600}
                mt={0.5}
                color={isActive ? 'link.1' : '#3f4254'}
                _groupHover={{ color: 'link.1' }}
                transitionDuration="300ms"
              >
                {title}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
};

TabControl.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      icon: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default memo(TabControl);
