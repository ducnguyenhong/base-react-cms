import { Flex } from '@chakra-ui/react';
import { ButtonCreate } from 'components/table-control';
import UserFilter from './filter';
import UserTable from './table';

const UserList = () => {
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
