import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { memo, useCallback } from 'react';

const BirthDate = ({ item }) => {
  const { birthDate } = item;

  const getAge = useCallback((timestamp) => {
    const ageDate = new Date(dayjs().valueOf() - timestamp);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }, []);

  return (
    <Box>
      <Text>{dayjs(birthDate).format('DD/MM/YYYY')}</Text>
      <Text mt={0.5} color="text.2" fontWeight={400} fontSize={13}>
        {getAge(birthDate)} tuổi
      </Text>
    </Box>
  );
};

export default memo(BirthDate);
