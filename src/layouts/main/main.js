import { Box, Flex } from '@chakra-ui/react';
import { BreadCrumb, ErrorFallback, Header, Section, Sidebar } from 'layouts';
import { memo, useCallback } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { showSidebarAtom, tokenState } from 'state-manage/recoil';
import { BODY_PADDING, DISABLE_ROUTE_PORTAL, MAIN_PADDING_X } from 'utils/const';
import { useMediaQuery } from 'utils/helper';

const Main = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom);
  const token = useRecoilValue(tokenState);
  const isMobileAndTablet = useMediaQuery('(max-width: 992px)');
  const showBackground = !DISABLE_ROUTE_PORTAL.some((item) => location.pathname.includes(item));

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

          <Box
            bgColor="#EEF0F8"
            px={showBackground ? BODY_PADDING : { xs: 1, lg: 2 }}
            py={showBackground ? BODY_PADDING : { xs: 1, md: 3 }}
          >
            <Box
              bgColor={showBackground ? '#FFF' : 'transparent'}
              minH={{ xs: 'calc(100vh - 71px)', md: 'calc(100vh - 85px)', lg: 'calc(100vh - 134px)' }}
              borderRadius={4}
            >
              <Section />
              <Box px={MAIN_PADDING_X} py={{ xs: 5, lg: 6 }}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <Outlet />
                </ErrorBoundary>
              </Box>
            </Box>
          </Box>
        </main>
      </Flex>
    </Flex>
  );
};

export default memo(Main);
