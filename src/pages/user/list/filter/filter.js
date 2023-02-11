import { Grid, GridItem } from '@chakra-ui/react';
import { Search, Select } from 'components/table-control';
import { memo } from 'react';

const UserFilter = () => {
  const options = [
    { value: 'MALE', label: 'Nam' },
    { value: 'FEMALE', label: 'Nữ' }
  ];

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={8} mt={5}>
      <GridItem w="100%">
        <Search />
      </GridItem>
      <GridItem w="100%">
        <Select title="Giới tính" options={options} onChange={(data) => {}} />
      </GridItem>
      <GridItem w="100%" />
      <GridItem w="100%" />
    </Grid>
  );
};

export default memo(UserFilter);
