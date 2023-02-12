import { Flex, Icon, Image, Text } from '@chakra-ui/react';
import ImgUserAvatar from 'assets/images/user-avatar.png';
import { memo } from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FullName = ({ item }) => {
  const { fullName, username, id, avatar, gender } = item;

  return (
    <Flex align="center" gap={2}>
      <Link to={`/users/detail/${id}`}>
        <Image src={avatar} fallbackSrc={ImgUserAvatar} boxSize="38px" borderRadius="full" />
      </Link>

      <Flex direction="column" gap={0.5}>
        <Link to={`/users/detail/${id}`}>
          <Text as="span" fontWeight={600} transitionDuration="200ms" _hover={{ color: 'link.1' }}>
            {fullName}
          </Text>
        </Link>
        <Flex align="center" gap={2}>
          <Text color="#828282">@{username}</Text>
          <Icon as={gender === 'MALE' ? FaMars : FaVenus} color={gender === 'MALE' ? '#3277e7' : '#ff6666'} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(FullName);
