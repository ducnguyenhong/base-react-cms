import { Flex } from '@chakra-ui/react';
import { LinkCreate } from 'components/table-control';
import { Helmet } from 'react-helmet';
import { useScrollTop } from 'utils/helper';
import UserFilter from './filter';
import UserTable from './table';

const UserList = () => {
  useScrollTop();

  return (
    <Flex direction="column">
      <Helmet>
        <title>Danh sách người dùng | CMS Pro</title>
      </Helmet>
      <Flex justify="flex-end">
        <LinkCreate route="/users/create" />
      </Flex>
      <UserFilter />
      <UserTable />
    </Flex>
  );
};

export default UserList;
