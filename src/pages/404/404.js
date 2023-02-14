import { Flex, Image, Text } from '@chakra-ui/react';
import Img404 from 'assets/images/404.png';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <Flex p={{ xs: 3, lg: 20 }} align="center" justify="center" direction="column" gap={10}>
      <Text textTransform="uppercase" fontWeight={700} fontSize={20}>
        Trang không tồn tại
      </Text>
      <Link to="/">
        <Text
          bgColor="#008000"
          px={5}
          color="#FFF"
          fontWeight={600}
          py={2}
          borderRadius={5}
          align="center"
          gap={2}
          _hover={{ bgColor: '#009900' }}
          transitionDuration="300ms"
        >
          Về trang chủ
        </Text>
      </Link>
      <Image src={Img404} w={{ xs: '100%', md: '75%', lg: '50%' }} />
    </Flex>
  );
};

export default NotFound404;
