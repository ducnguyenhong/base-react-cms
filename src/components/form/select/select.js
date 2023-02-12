import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import ReactSelect from 'react-select';

const Select = (props) => {
  const {
    options,
    title,
    onChange,
    value,
    defaultValue,
    placeholder = 'Chọn...',
    isMulti,
    isSearchable = true,
    isClearable,
    isDisabled
  } = props;

  return (
    <Box>
      {!!title && (
        <Text mb={0.5} fontSize={13} fontWeight={600}>
          {title}
        </Text>
      )}
      <ReactSelect
        isMulti={isMulti}
        options={options}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
      />
    </Box>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func, // (option | option[]) => void
  title: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  ])
};

export default memo(Select);
