import { Flex, Icon } from '@chakra-ui/react';
import { memo } from 'react';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ActionEdit = (props) => {
  const { item, route } = props;

  return (
    <Link to={`/${route}/edit/${item.id}`}>
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
        <Icon as={FaPen} fontSize={12} color="#808080" _groupHover={{ color: '#FFF' }} transitionDuration="300ms" />
      </Flex>
    </Link>
  );
};

export default memo(ActionEdit);
