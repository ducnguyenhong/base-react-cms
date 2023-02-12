import { Box, Flex, Text } from '@chakra-ui/react';
import Table from 'components/table';
import { Action, Pagination } from 'components/table-control';
import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useGetTableWidth } from 'utils/helper';
import BirthDate from './custom-field/birth-date';
import Contact from './custom-field/contact';
import FullName from './custom-field/full-name';

const UserTable = () => {
  const tableWidth = useGetTableWidth();

  const header = [
    {
      title: '#',
      field: 'id'
    },
    {
      title: 'Họ và tên',
      field: 'fullName'
    },
    {
      title: 'Ngày sinh',
      field: 'birthDate'
    },
    {
      title: 'Liên hệ',
      field: 'phone'
    },
    {
      title: 'Địa chỉ',
      field: 'address'
    }
  ];

  const data = Array.from(Array(10).keys()).map((item) => ({
    id: item + 1,
    fullName: 'Nguyễn Hồng Đức',
    username: 'protontech',
    avatar: '',
    gender: 'MALE',
    birthDate: 944845200000,
    phone: '0376876191',
    email: 'protontechvn@gmail.com',
    address: 'Cầu Giấy, Ba Đình, Hà Nội'
  }));

  const renderItem = useCallback((field, item) => {
    if (!item || !item[field]) {
      return null;
    }
    if (field === 'birthDate') {
      return <BirthDate item={item} />;
    }
    if (field === 'phone') {
      return <Contact item={item} />;
    }
    if (field === 'fullName') {
      return <FullName item={item} />;
    }
    if (field === 'id') {
      return (
        <Link to={`/users/detail/${item.id}`}>
          <Text as="span" fontWeight={600}>
            {item.id}
          </Text>
        </Link>
      );
    }
    return <Text>{item[field]}</Text>;
  }, []);

  return (
    <Box mt={{ xs: 4, lg: 16 }} w={tableWidth}>
      <Table
        header={header}
        data={data}
        renderItem={renderItem}
        renderAction={(item) => <Action item={item} route="users" />}
      />
      <Flex justify="flex-end" my={10}>
        <Pagination allPage={3} currentPage={1} onChange={() => {}} />
      </Flex>
    </Box>
  );
};

export default memo(UserTable);
