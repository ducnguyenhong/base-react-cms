import { Box, Flex, Icon, Link } from '@chakra-ui/react';
import { memo } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = ({ item }) => {
  const { phone, email } = item;

  return (
    <Box>
      <Flex align="center" gap={2}>
        <Icon as={FaPhone} color="#828282" fontSize={12} />
        <Link href={`tel:${phone}`} _hover={{ textDecoration: 'none', color: '#0000e6' }}>
          {phone}
        </Link>
      </Flex>
      <Flex mt={1} align="center" gap={2}>
        <Icon as={FaEnvelope} color="#828282" fontSize={12} mt="1px" />
        <Link href={`mailto:${email}`} _hover={{ textDecoration: 'none', color: '#0000e6' }}>
          {email}
        </Link>
      </Flex>
    </Box>
  );
};

export default memo(Contact);
