import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo, useCallback, useMemo } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Pagination = (props) => {
  const { allPage, currentPage, onChange } = props;

  const onPrev = useCallback(() => {
    if (currentPage < 2) {
      return;
    }
    onChange(currentPage - 1);
  }, [currentPage, onChange]);

  const onPrevAll = useCallback(() => {
    if (currentPage === 1) {
      return;
    }
    onChange(1);
  }, [currentPage, onChange]);

  const onNext = useCallback(() => {
    if (currentPage > allPage - 1) {
      return;
    }
    onChange(currentPage + 1);
  }, [allPage, currentPage, onChange]);

  const onNextAll = useCallback(() => {
    if (currentPage === allPage) {
      return;
    }
    onChange(allPage);
  }, [allPage, currentPage, onChange]);

  const onChangePage = useCallback(
    (page) => {
      if (currentPage === page) {
        return;
      }
      onChange(page);
    },
    [currentPage, onChange]
  );

  const displayPages = useMemo(() => {
    if (currentPage < 3) {
      return [1, 2, 3];
    }
    if (currentPage >= allPage) {
      return [allPage - 2, allPage - 1, allPage];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  }, [allPage, currentPage]);

  return (
    <Flex gap={2} align="center">
      <Button
        minW={0}
        w="40px"
        h="36px"
        bgColor="#f5f5f5"
        border="1px solid #f2f2f2"
        _hover={{ bgColor: '#009dff' }}
        transitionDuration="300ms"
        disabled={currentPage === 1}
        data-group
        onClick={onPrevAll}
      >
        <Icon
          as={HiChevronDoubleLeft}
          fontSize={21}
          color="#494B74"
          transitionDuration="300ms"
          _groupHover={{ color: '#FFF' }}
        />
      </Button>

      <Button
        minW={0}
        w="40px"
        h="36px"
        bgColor="#f5f5f5"
        border="1px solid #f2f2f2"
        _hover={{ bgColor: '#009dff' }}
        transitionDuration="300ms"
        data-group
        disabled={currentPage < 2}
        onClick={onPrev}
      >
        <Icon
          as={HiChevronLeft}
          fontSize={24}
          color="#494B74"
          transitionDuration="300ms"
          _groupHover={{ color: '#FFF' }}
        />
      </Button>

      {displayPages.map((item) => (
        <Button
          key={item}
          minW={0}
          w="40px"
          h="36px"
          bgColor={currentPage === item ? '#009dff' : '#f5f5f5'}
          border="1px solid #f2f2f2"
          _hover={{ bgColor: '#009dff' }}
          transitionDuration="300ms"
          data-group
          disabled={currentPage === item}
          onClick={() => onChangePage(item)}
        >
          <Text
            fontWeight={600}
            fontSize={16}
            as="span"
            color={currentPage === item ? '#FFF' : '#494B74'}
            transitionDuration="300ms"
            _groupHover={{ color: '#FFF' }}
          >
            {item}
          </Text>
        </Button>
      ))}

      <Button
        minW={0}
        w="40px"
        h="36px"
        bgColor="#f5f5f5"
        border="1px solid #f2f2f2"
        _hover={{ bgColor: '#009dff' }}
        transitionDuration="300ms"
        data-group
        disabled={currentPage > allPage - 1}
        onClick={onNext}
      >
        <Icon
          as={HiChevronRight}
          fontSize={24}
          color="#494B74"
          transitionDuration="300ms"
          _groupHover={{ color: '#FFF' }}
        />
      </Button>

      <Button
        minW={0}
        w="40px"
        h="36px"
        bgColor="#f5f5f5"
        border="1px solid #f2f2f2"
        _hover={{ bgColor: '#009dff' }}
        transitionDuration="300ms"
        data-group
        disabled={currentPage === allPage}
        onClick={onNextAll}
      >
        <Icon
          as={HiChevronDoubleRight}
          fontSize={21}
          color="#494B74"
          transitionDuration="300ms"
          _groupHover={{ color: '#FFF' }}
        />
      </Button>
    </Flex>
  );
};

Pagination.propTypes = {
  onChange: PropTypes.func.isRequired, // (page: number) => void
  currentPage: PropTypes.number.isRequired,
  allPage: PropTypes.number.isRequired
};

export default memo(Pagination);
