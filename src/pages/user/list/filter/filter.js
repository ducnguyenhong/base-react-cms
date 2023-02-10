import { Grid, GridItem } from '@chakra-ui/react';
import { Search } from 'components/table-control';
import { memo } from 'react';

const UserFilter = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={5}>
      <GridItem w="100%">
        <Search />
      </GridItem>
      <GridItem w="100%" />
      <GridItem w="100%" />
      <GridItem w="100%" />
    </Grid>
  );
};

export default memo(UserFilter);
