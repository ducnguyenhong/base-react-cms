import { Flex, Icon } from '@chakra-ui/react';
import { memo } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ActionView = (props) => {
  const { item, route } = props;

  return (
    <Link to={`/${route}/detail/${item.id}`}>
      <Flex
        bgColor="#e6e6e6"
        borderRadius={6}
        w={9}
        h={9}
        align="center"
        justify="center"
        _hover={{ bgColor: '#009dff' }}
        transitionDuration="300ms"
        data-group
      >
        <Icon as={FaEye} fontSize={15} color="#808080" _groupHover={{ color: '#FFF' }} transitionDuration="300ms" />
      </Flex>
    </Link>
  );
};

export default memo(ActionView);
