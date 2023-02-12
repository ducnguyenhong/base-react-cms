import { Box, Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { useScrollTop } from 'utils/helper';

const Home = () => {
  useScrollTop();

  return (
    <Flex direction="column">
      <Helmet>
        <title>Bảng điều khiển | CMS Pro</title>
      </Helmet>
      <Box mt={16}>home</Box>
    </Flex>
  );
};

export default Home;
