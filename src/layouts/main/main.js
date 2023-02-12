import { Box, Flex } from '@chakra-ui/react';
import { BreadCrumb, Header, Section, Sidebar } from 'layouts';
import { memo, useCallback } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { showSidebarAtom, tokenState } from 'state-manage/recoil';
import { BODY_PADDING, MAIN_PADDING_X } from 'utils/const';
import { useMediaQuery } from 'utils/helper';

const Main = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom);
  const token = useRecoilValue(tokenState);
  const isMobileAndTablet = useMediaQuery('(max-width: 992px)');

  const onToggleSidebar = useCallback(() => setShowSidebar((prev) => !prev), [setShowSidebar]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Flex flex={1} pos="relative">
      <Sidebar />
      {isMobileAndTablet && showSidebar && (
        <Box onClick={onToggleSidebar} pos="absolute" w="full" h="full" bgColor="main.1" opacity={0.6} zIndex={150} />
      )}
      <Flex flex={1} ml={isMobileAndTablet ? 0 : showSidebar ? 80 : 20} transitionDuration="300ms">
        <main style={{ width: '100%' }}>
          <Header />

          {isMobileAndTablet && <BreadCrumb />}

          <Box bgColor="#EEF0F8" p={BODY_PADDING}>
            <Box bgColor="#FFF" minH="calc(100vh - 134px)" borderRadius={4}>
              <Section />
              <Box px={MAIN_PADDING_X} py={{ xs: 5, lg: 6 }}>
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
