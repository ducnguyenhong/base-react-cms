import { Flex, Image, Text } from '@chakra-ui/react';
import ImgUserAvatar from 'assets/images/user-avatar.png';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const FullName = ({ item }) => {
  const { fullName, username, id, avatar } = item;

  return (
    <Flex align="center" gap={2}>
      <Link to={`/users/detail/${id}`}>
        <Image src={avatar} fallbackSrc={ImgUserAvatar} boxSize="38px" borderRadius="full" />
      </Link>

      <Flex direction="column" gap={0.5}>
        <Link to={`/users/detail/${id}`}>
          <Text as="span" fontWeight={600}>
            {fullName}
          </Text>
        </Link>
        <Text color="#828282">@{username}</Text>
      </Flex>
    </Flex>
  );
};

export default memo(FullName);
