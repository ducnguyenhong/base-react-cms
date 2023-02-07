import { Box, Flex } from '@chakra-ui/react';
import Header from 'layouts/header';
import Sidebar from 'layouts/sidebar';
import AppRoute from 'routes';

const App = () => {
  return (
    <Flex flex={1}>
      <Sidebar />
      <Flex flex={1}>
        <main style={{ width: '100%' }}>
          <Header />
          <Box bgColor="#EEF0F8" p={10}>
            <Box bgColor="#FFF" boxShadow="base" minH="calc(100vh - 134px)" borderRadius={4} p={8}>
              <AppRoute />
            </Box>
          </Box>
        </main>
      </Flex>
    </Flex>
  );
};

export default App;
