import { Table as ChakraTable, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo } from 'react';

const Table = (props) => {
  const { header, data, renderItem, renderAction } = props;

  return (
    <TableContainer>
      <ChakraTable variant="unstyled" border="1px solid #e6e6e6">
        <Thead bgColor="main.0">
          <Tr>
            {header.map((item) => {
              const { title, field } = item;
              return (
                <Th key={field} color="#FFF" py={4} fontSize={12} border="1px solid #999">
                  {title}
                </Th>
              );
            })}
            {!!renderAction && (
              <Th color="#FFF" w={60} py={4} fontSize={12} border="1px solid #999">
                Hành động
              </Th>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((dItem, dIndex) => {
            return (
              <Tr key={`tr_${dIndex}`} bgColor={dIndex % 2 !== 0 ? '#f2f2f2' : '#FFF'}>
                {header.map((hItem) => {
                  const { field } = hItem;
                  return <Td key={`td_${field}_${dIndex}`}>{renderItem ? renderItem(field, dItem) : dItem[field]}</Td>;
                })}
                {!!renderAction && <Td>{renderAction(dItem)}</Td>}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

Table.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func, // (field: string, item: ObjectData) => void
  renderAction: PropTypes.func // (item: ObjectData) => void
};

export default memo(Table);
