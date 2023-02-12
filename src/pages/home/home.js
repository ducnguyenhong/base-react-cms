import { Box, Flex } from '@chakra-ui/react';
import { useScrollTop } from 'utils/helper';

const Home = () => {
  useScrollTop();

  return (
    <Flex direction="column">
      <Box mt={16}>home</Box>
    </Flex>
  );
};

export default Home;
