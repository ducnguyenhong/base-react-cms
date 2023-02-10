import { Box, Flex } from '@chakra-ui/react';
import Header from 'layouts/header';
import Section from 'layouts/section';
import Sidebar from 'layouts/sidebar';
import { useRecoilValue } from 'recoil';
import AppRoute from 'routes';
import { showSidebarAtom } from 'state-manage/recoil';

const App = () => {
  const showSidebar = useRecoilValue(showSidebarAtom);

  return (
    <Flex flex={1}>
      <Sidebar />
      <Flex flex={1} ml={showSidebar ? 80 : 20} transitionDuration="300ms">
        <main style={{ width: '100%' }}>
          <Header />
          <Box bgColor="#EEF0F8" p={10}>
            <Box bgColor="#FFF" minH="calc(100vh - 134px)" borderRadius={4}>
              <Section />
              <Box px={8} py={6}>
                <AppRoute />
              </Box>
            </Box>
          </Box>
        </main>
      </Flex>
    </Flex>
  );
};

export default App;
