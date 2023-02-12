import { Flex } from '@chakra-ui/react';
import { ButtonCreate } from 'components/table-control';
import { useScrollTop } from 'utils/helper';
import UserFilter from './filter';
import UserTable from './table';

const UserList = () => {
  useScrollTop();

  return (
    <Flex direction="column">
      <Flex justify="flex-end">
        <ButtonCreate route="/users/create" />
      </Flex>
      <UserFilter />
      <UserTable />
    </Flex>
  );
};

export default UserList;
