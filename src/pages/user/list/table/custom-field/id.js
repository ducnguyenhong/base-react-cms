import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const Id = ({ item }) => {
  const { id } = item;

  return (
    <Link to={`/users/detail/${id}`}>
      <Text as="span" fontWeight={600} transitionDuration="200ms" _hover={{ color: 'link.1' }}>
        {id}
      </Text>
    </Link>
  );
};

export default memo(Id);
