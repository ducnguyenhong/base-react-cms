import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo, useCallback, useEffect, useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const Search = (props) => {
  const { defaultValue = '', onChange, placeholder = 'Tìm kiếm...' } = props;
  const [keyword, setKeyword] = useState('');

  const onChangeText = useCallback(
    (e) => {
      setKeyword(e.target.value);
      onChange && onChange(e.target.value.trim());
    },
    [onChange]
  );

  const onClear = useCallback(() => {
    setKeyword('');
    onChange && onChange('');
  }, [onChange]);

  useEffect(() => setKeyword(defaultValue), [defaultValue]);

  return (
    <InputGroup h="38px" pos="relative">
      <InputLeftElement h="full" pointerEvents="none" children={<FiSearch color="#999" size={16} />} />
      <Input
        type="text"
        value={keyword}
        onChange={onChangeText}
        placeholder={placeholder}
        h="full"
        pr={10}
        _focus={{ border: 'none' }}
      />
      {!!keyword && (
        <Button
          bgColor="transparent"
          _hover={{ bgColor: 'transparent' }}
          _active={{ bgColor: 'transparent' }}
          h={7}
          w={7}
          p={0}
          minW={0}
          pos="absolute"
          top="6px"
          right={1.5}
          zIndex={1}
          onClick={onClear}
        >
          <FiX color="#999" size={15} />
        </Button>
      )}
    </InputGroup>
  );
};

Search.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func // (keyword: string) => void
};

export default memo(Search);