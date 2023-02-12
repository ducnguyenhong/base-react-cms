import {
  Button,
  Flex,
  Icon,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text
} from '@chakra-ui/react';
import ImgUserAvatar from 'assets/images/user-avatar.png';
import { memo, useCallback } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { tokenState } from 'state-manage/recoil';
import { useMediaQuery } from 'utils/helper';

const UserInfo = () => {
  const setToken = useSetRecoilState(tokenState);
  const onLogout = useCallback(() => setToken(''), [setToken]);
  const isMobileAndTablet = useMediaQuery('(max-width: 992px)');

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button
          h={{ xs: 10, lg: 14 }}
          gap={2.5}
          px={{ xs: 0, lg: 3 }}
          borderRadius={{ xs: 'full', lg: 10 }}
          bgColor="#f7f7f8"
          border={{ xs: 'none', lg: '1px solid #f2f2f2' }}
          _hover={{ bgColor: '#f2f2f2' }}
        >
          <Image src="" fallbackSrc={ImgUserAvatar} boxSize={10} borderRadius="full" />
          {!isMobileAndTablet && (
            <Text as="span" fontWeight={600}>
              Administrator
            </Text>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent w="350px">
        <PopoverHeader>
          <Flex align="center" gap={3} p={3}>
            <Image src="" fallbackSrc={ImgUserAvatar} boxSize={10} borderRadius="full" />
            <Text as="span" fontWeight={600}>
              Administrator
            </Text>
          </Flex>
        </PopoverHeader>
        <PopoverBody>
          <Flex direction="column" gap={2} px={3}>
            <Link to="/profile">
              <Flex align="center" py={2} gap={2}>
                <Icon as={FaUserCircle} />
                <Text as="span" mt={0.5} fontWeight={600}>
                  Thông tin cá nhân
                </Text>
              </Flex>
            </Link>

            <Link to="/notifications">
              <Flex align="center" py={2} gap={2}>
                <Icon as={FaBell} />
                <Text as="span" mt={0.5} fontWeight={600}>
                  Thông báo
                </Text>
              </Flex>
            </Link>
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Flex p={3}>
            <Button colorScheme="red" onClick={onLogout}>
              Đăng xuất
            </Button>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default memo(UserInfo);
