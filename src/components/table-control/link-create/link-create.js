import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LinkCreate = (props) => {
  const { route } = props;
  return (
    <Link to={route}>
      <Flex
        bgColor="#008000"
        px={5}
        py={2}
        borderRadius={5}
        align="center"
        gap={2}
        _hover={{ bgColor: '#009900' }}
        transitionDuration="300ms"
      >
        <FaPlus color="#FFF" size={13} />
        <Text as="span" color="#FFF" fontWeight={600} mt="2px">
          Tạo mới
        </Text>
      </Flex>
    </Link>
  );
};

LinkCreate.propTypes = {
  route: PropTypes.string.isRequired
};

export default memo(LinkCreate);
