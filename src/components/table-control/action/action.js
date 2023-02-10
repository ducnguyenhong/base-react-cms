import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import ActionDelete from './subs/action-delete';
import ActionEdit from './subs/action-edit';
import ActionView from './subs/action-view';

const Action = (props) => {
  const { item, route, disableView, disableEdit, disableDelete, onConfirmDelete } = props;
  return (
    <Flex gap={4} align="center">
      {!disableView && <ActionView item={item} route={route} />}
      {!disableEdit && <ActionEdit item={item} route={route} />}
      {!disableDelete && <ActionDelete item={item} onConfirmDelete={onConfirmDelete} />}
    </Flex>
  );
};

Action.propTypes = {
  item: PropTypes.object.isRequired, // object item data
  route: PropTypes.string,
  onConfirmDelete: PropTypes.func, // (item) => void
  disableView: PropTypes.bool,
  disableEdit: PropTypes.bool,
  disableDelete: PropTypes.bool
};

export default memo(Action);
