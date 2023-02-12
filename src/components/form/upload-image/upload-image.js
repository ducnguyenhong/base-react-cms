import { Flex, FormLabel, Icon, Image } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const UploadImage = (props) => {
  const { id = 'upload-image' } = props;
  const [file, setFile] = useState();

  const onChangeFile = useCallback((e) => {
    const fileList = e.target.files;
    if (fileList) {
      setFile(fileList[0]);
    }
  }, []);

  return (
    <FormLabel htmlFor={id} w={28} h={28}>
      <Flex
        bgColor="transparent"
        _hover={{ bgColor: '#F5F5F5' }}
        _active={{ bgColor: '#F5F5F5' }}
        w="full"
        h="full"
        border="1px solid #ccc"
        align="center"
        justify="center"
        borderRadius={5}
        cursor="pointer"
      >
        {file ? (
          <Image src={URL.createObjectURL(file)} w="full" h="full" objectFit="cover" />
        ) : (
          <Icon as={FaPlusCircle} color="link.1" fontSize={22} />
        )}
      </Flex>
      <input type="file" accept="image/*" id={id} style={{ display: 'none' }} onChange={onChangeFile} />
    </FormLabel>
  );
};

export default memo(UploadImage);
