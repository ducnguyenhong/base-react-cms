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

  const ROUTE_DATA = [
    {
      icon: FaBell,
      title: 'Thông báo',
      route: '/notifications'
    },
    {
      icon: FaUserCircle,
      title: 'Thông tin cá nhân',
      route: '/profile'
    }
  ];

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
      <PopoverContent w="350px" borderRadius={5} overflow="hidden">
        <PopoverHeader p={0}>
          <Flex align="center" gap={3} px={4} py={4} bgGradient="linear(to-r, #009dff, #007ecc)">
            <Image src="" fallbackSrc={ImgUserAvatar} boxSize={10} borderRadius="full" />
            <Text as="span" fontWeight={600} color="#FFF">
              Administrator
            </Text>
          </Flex>
        </PopoverHeader>
        <PopoverBody p={0}>
          <Flex direction="column">
            {ROUTE_DATA.map((item) => {
              const { route, title, icon } = item;

              return (
                <Link to={route} key={route}>
                  <Flex
                    align="center"
                    py={3.5}
                    px={4}
                    gap={2}
                    transitionDuration="300ms"
                    _hover={{ bgColor: '#f2f2f2' }}
                  >
                    <Icon as={icon} />
                    <Text as="span" mt={0.5} fontWeight={600}>
                      {title}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Flex py={3} px={1.5}>
            <Button
              bgColor="#FFE2E5"
              transitionDuration="250ms"
              color="#E53E3E"
              onClick={onLogout}
              _hover={{ bgColor: '#E53E3E', color: '#FFF' }}
            >
              Đăng xuất
            </Button>
          </Flex>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default memo(UserInfo);
