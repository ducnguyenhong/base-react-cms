import { Box, Flex, Heading } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import UserCreate from '../create';
import UserInfo from './subs/user-info';
import ChangePassword from './tabs/change-password';
import { TAB_DATA } from './tabs/tab-data';

const UserDetail = () => {
  const location = useLocation();
  const { pathname } = location;
  const arrPath = pathname.split('/');
  const currentRoute = arrPath[arrPath.length - 1];
  const dataRoute = TAB_DATA.find((item) => item.route === currentRoute);

  if (!dataRoute) {
    return <Navigate to="edit" />;
  }

  return (
    <Flex flex={1} gap={10} h="full" w="full" direction={{ xs: 'column', lg: 'row' }}>
      <Helmet>
        <title>Chỉnh sửa thông tin | CMS Pro</title>
      </Helmet>
      <UserInfo />
      <Box
        w={{ xs: 'full', lg: 3 / 4 }}
        h="full"
        bgColor="#FFF"
        minH={{ xs: 0, lg: 'calc(100vh - 120px)' }}
        borderRadius={5}
      >
        <Flex h={16} w="full" borderBottom="1px solid #e6e6e6" pl={8} pr={6} align="center" justify="space-between">
          <Heading as="h3" fontSize={15} textTransform="uppercase">
            {dataRoute.title}
          </Heading>
        </Flex>

        <Box p={8}>
          <Routes>
            <Route path="edit" element={<UserCreate />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="*" element={<UserCreate />} />
          </Routes>
        </Box>
      </Box>
    </Flex>
  );
};

export default UserDetail;
