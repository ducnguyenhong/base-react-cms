import { FormLabel, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo } from 'react';

const FieldLabel = (props) => {
  const { title, isRequired } = props;
  return (
    <FormLabel fontWeight={600}>
      {title}{' '}
      {isRequired && (
        <Text as="span" color="red">
          *
        </Text>
      )}
    </FormLabel>
  );
};

FieldLabel.propTypes = {
  title: PropTypes.string.isRequired,
  isRequired: PropTypes.bool
};

export default memo(FieldLabel);
