import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  useDisclosure
} from '@chakra-ui/react';
import { memo, useCallback, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';

const ActionDelete = (props) => {
  const { item, onConfirmDelete } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const onConfirm = useCallback(() => {
    onClose();
    onConfirmDelete && onConfirmDelete(item);
  }, [item, onClose, onConfirmDelete]);

  return (
    <>
      <Button
        bgColor="#e6e6e6"
        borderRadius={6}
        w={9}
        h={9}
        p={0}
        minW={0}
        align="center"
        justify="center"
        _hover={{ bgColor: '#ff6666' }}
        transitionDuration="300ms"
        data-group
        onClick={onOpen}
      >
        <Icon as={FaTrash} fontSize={12} color="#808080" _groupHover={{ color: '#FFF' }} transitionDuration="300ms" />
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} size="lg">
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Xác nhận xoá
            </AlertDialogHeader>

            <AlertDialogBody>Bạn có chắc chắn muốn xoá?</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onConfirm} mr={5}>
                Xác nhận
              </Button>
              <Button ref={cancelRef} onClick={onClose}>
                Huỷ bỏ
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default memo(ActionDelete);
