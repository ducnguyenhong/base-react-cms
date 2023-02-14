import { Box, Flex, Image, Kbd, Text } from '@chakra-ui/react';
import ImgError from 'assets/images/error.png';
import { memo } from 'react';

const ErrorFallback = ({ error }) => {
  return (
    <Flex p={{ xs: 3, lg: 10 }} align="center" justify="center" direction="column" gap={12}>
      <Text textTransform="uppercase" fontWeight={700} fontSize={20}>
        Đã có lỗi xảy ra
      </Text>
      <Box>
        <Text color="red" fontSize={16} textAlign="center">
          Lỗi: {error.message}
        </Text>
        <Text mt={10} textAlign="center">
          <span>
            <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>J</Kbd> để xem chi tiết (Console Log)
          </span>
        </Text>
      </Box>
      <Image src={ImgError} w={{ xs: '100%', md: '75%', lg: '30%' }} />
    </Flex>
  );
};

export default memo(ErrorFallback);
