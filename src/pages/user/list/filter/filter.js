import { Grid, GridItem } from '@chakra-ui/react';
import { Select } from 'components/form';
import { Search } from 'components/table-control';
import { memo } from 'react';

const UserFilter = () => {
  const options = [
    { value: 'MALE', label: 'Nam' },
    { value: 'FEMALE', label: 'Nữ' }
  ];

  return (
    <Grid
      templateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
      gap={{ xs: 3, md: 6, lg: 8 }}
      mt={{ xs: 2, lg: 5 }}
    >
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
