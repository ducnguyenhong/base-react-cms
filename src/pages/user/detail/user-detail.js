import { Button, Flex, Heading, Icon, Image, Link, Text } from '@chakra-ui/react';
import ImgUserAvatar from 'assets/images/user-avatar.png';
import { FaMars } from 'react-icons/fa';
import { HiDotsHorizontal } from 'react-icons/hi';

const UserDetail = () => {
  return (
    <Flex flex={1} gap={10} h="full">
      <Flex w={1 / 4} minH="calc(100vh - 120px)" bgColor="#FFF" borderRadius={5} direction="column">
        <Flex h={16} w="full" borderBottom="1px solid #e6e6e6" pl={8} pr={6} align="center" justify="space-between">
          <Heading as="h3" fontSize={15} textTransform="uppercase">
            Chi tiết người dùng
          </Heading>
          <Button bgColor="transparent" _hover={{ bgColor: 'transparent' }} _active={{ bgColor: 'transparent' }}>
            <Icon as={HiDotsHorizontal} fontSize={18} color="#828282" />
          </Button>
        </Flex>
        <Flex p={8} direction="column">
          <Flex gap={5}>
            <Image src="" fallbackSrc={ImgUserAvatar} boxSize={24} borderRadius="full" />
            <Flex direction="column" gap={2}>
              <Text fontSize={20} fontWeight={700} noOfLines={2}>
                Nguyễn Hồng Đức
              </Text>
              <Flex align="center" gap={2}>
                <Text color="#828282">@protontech</Text>
                <Icon as={FaMars} color="#3277e7" />
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" gap={5} mt={16}>
            <Flex justify="space-between">
              <Text w="30%" fontWeight={600}>
                Ngày sinh:
              </Text>
              <Text flex={1} wordBreak="break-word" textAlign="right">
                11/12/1999
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text w="30%" fontWeight={600}>
                Email:
              </Text>
              <Text flex={1} textAlign="right">
                <Link
                  href="mailto:protontechvn@gmail.com"
                  wordBreak="break-word"
                  _hover={{ textDecoration: 'none', color: 'link.1' }}
                >
                  protontechvn@gmail.com
                </Link>
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text w="30%" fontWeight={600}>
                SĐT:
              </Text>
              <Text flex={1} textAlign="right">
                <Link href="tel:0376876191" wordBreak="break-word" _hover={{ textDecoration: 'none', color: 'link.1' }}>
                  0376876191
                </Link>
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text w="30%" fontWeight={600}>
                Địa chỉ:
              </Text>
              <Text flex={1} wordBreak="break-word" textAlign="right">
                Mai Dịch, Cầu Giấy, Hà Nội
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w={3 / 4} h="full" bgColor="#FFF" minH="calc(100vh - 120px)" borderRadius={5} p={5}>
        bbb
      </Flex>
    </Flex>
  );
};

export default UserDetail;
