import { Box, Flex } from '@chakra-ui/react';
import Header from 'layouts/header';
import Section from 'layouts/section';
import Sidebar from 'layouts/sidebar';
import { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { showSidebarAtom, tokenState } from 'state-manage/recoil';

const Main = () => {
  const showSidebar = useRecoilValue(showSidebarAtom);
  const token = useRecoilValue(tokenState);

  if (!token) {
    return <Navigate to="/login" />;
  }

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
                <Outlet />
              </Box>
            </Box>
          </Box>
        </main>
      </Flex>
    </Flex>
  );
};

export default memo(Main);
