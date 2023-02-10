import { Box, Text } from '@chakra-ui/react';
import Table from 'components/table';
import { Action } from 'components/table-control';
import { memo, useCallback } from 'react';
import BirthDate from './custom-field/birth-date';
import Contact from './custom-field/contact';

const UserTable = () => {
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
    avatar: '',
    gender: 'MALE',
    birthDate: 944845200000,
    phone: '0376876191',
    email: 'protontechvn@gmail.com',
    address: 'Cầu Giấy, Ba Đình, Hà Nội'
  }));

  const renderItem = useCallback((field, item) => {
    if (field === 'birthDate') {
      return <BirthDate item={item} />;
    }
    if (field === 'phone') {
      return <Contact item={item} />;
    }
    return <Text>{item[field]}</Text>;
  }, []);

  return (
    <Box mt={16}>
      <Table
        header={header}
        data={data}
        renderItem={renderItem}
        renderAction={(item) => <Action item={item} route="users" />}
      />
    </Box>
  );
};

export default memo(UserTable);
