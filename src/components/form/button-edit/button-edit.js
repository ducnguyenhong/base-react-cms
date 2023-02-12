import { Button, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { FaPen } from 'react-icons/fa';

const ButtonEdit = (props) => {
  const { onClick, isLoading, isDisabled } = props;

  return (
    <Button
      type="submit"
      bgColor="#008000"
      px={5}
      py={2}
      borderRadius={5}
      align="center"
      gap={2}
      _hover={{ bgColor: '#009900' }}
      transitionDuration="300ms"
      onClick={onClick}
      isLoading={isLoading}
      isDisabled={isDisabled}
    >
      <FaPen color="#FFF" size={11} />
      <Text as="span" color="#FFF" fontWeight={600} mt="2px">
        Cập nhật
      </Text>
    </Button>
  );
};

ButtonEdit.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default memo(ButtonEdit);
