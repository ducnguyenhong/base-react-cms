import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Table from 'components/table';
import { ButtonCreate, Search } from 'components/table-control';
import { useCallback } from 'react';

const Home = () => {
  const header = [
    {
      title: '#',
      field: 'id'
    },
    {
      title: 'Tiêu đề',
      field: 'title'
    },
    {
      title: 'Nội dung',
      field: 'content'
    }
  ];

  const data = Array.from(Array(10).keys()).map((item) => ({
    id: item + 1,
    title: `Tiêu đề số ${item + 1}`,
    content: `Nội dung đề số ${item + 1}`
  }));

  const renderAction = useCallback((item) => {
    return <Flex>{item.id}</Flex>;
  }, []);

  const renderItem = useCallback((field, item) => {
    return <Text>{item[field]}</Text>;
  }, []);

  return (
    <Flex direction="column">
      <Flex justify="flex-end">
        <ButtonCreate route="/create" />
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={5}>
        <GridItem w="100%">
          <Search />
        </GridItem>
        <GridItem w="100%" />
        <GridItem w="100%" />
        <GridItem w="100%" />
      </Grid>

      <Box mt={16}>
        <Table header={header} data={data} renderItem={renderItem} renderAction={renderAction} />
      </Box>
    </Flex>
  );
};

export default Home;
