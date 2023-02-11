import { Button, Flex, Heading, Icon, Image, Input, InputGroup, InputLeftElement, Link, Text } from '@chakra-ui/react';
import ImgLoginIntro from 'assets/images/login-intro.png';
import Logo from 'assets/images/logo.png';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaLock, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from 'state-manage/recoil';
import { showToast } from 'utils/helper';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useRecoilState(tokenState);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      username: 'admin',
      password: '123456'
    }
  });

  const onSubmit = useCallback(
    (data) => {
      const { username, password } = data;
      if (username !== 'admin' || password !== '123456') {
        showToast({
          content: 'Tài khoản hoặc mật khẩu không chính xác',
          status: 'error'
        });
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setToken('Proton-Tech');
      }, 1000);
    },
    [setToken]
  );

  const onChangeShowPass = useCallback(() => setShowPass((prev) => !prev), []);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  return (
    <Flex h="100vh">
      <Flex w="35%" h="full">
        <Image src={ImgLoginIntro} objectFit="cover" h="full" />
      </Flex>
      <Flex w="65%" h="full" direction="column" align="center" justify="center">
        <Flex flex={1} justify="center" align="center" direction="column" gap={12} w="400px">
          <Flex align="center" gap={4}>
            <Image src={Logo} w={16} />
            <Heading as="h3">CMS Pro</Heading>
          </Flex>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Flex gap={12} direction="column">
              <Flex direction="column" w="full" gap={2}>
                <Text fontWeight={600} fontSize={16}>
                  Tài khoản
                </Text>
                <InputGroup h={12} w="full">
                  <InputLeftElement h="full" pointerEvents="none" children={<FaUserAlt color="#999" size={16} />} />
                  <Input
                    type="text"
                    h="full"
                    pr={10}
                    borderColor="#CCC"
                    _focus={{ border: 'none' }}
                    _hover={{ borderColor: '#b3b3b3' }}
                    {...register('username', { required: 'Vui lòng nhập mật khẩu' })}
                  />
                </InputGroup>
                {errors && errors.username && <Text color="red">{errors.username.message}</Text>}
              </Flex>

              <Flex direction="column" w="full" gap={2}>
                <Text fontWeight={600} fontSize={16}>
                  Mật khẩu
                </Text>
                <InputGroup h={12} w="full" pos="relative">
                  <InputLeftElement h="full" pointerEvents="none" children={<FaLock color="#999" size={16} />} />
                  <Input
                    type={showPass ? 'text' : 'password'}
                    h="full"
                    pr={10}
                    borderColor="#CCC"
                    _focus={{ border: 'none' }}
                    _hover={{ borderColor: '#b3b3b3' }}
                    {...register('password', { required: 'Vui lòng nhập mật khẩu' })}
                  />
                  {!!watch('password') && (
                    <Button
                      bgColor="transparent"
                      _hover={{ bgColor: 'transparent' }}
                      _active={{ bgColor: 'transparent' }}
                      h={7}
                      w={7}
                      p={0}
                      minW={0}
                      pos="absolute"
                      top="8px"
                      right={1.5}
                      zIndex={1}
                      onClick={onChangeShowPass}
                    >
                      <Icon as={showPass ? FaEye : FaEyeSlash} color="#999" fontSize={16} />
                    </Button>
                  )}
                </InputGroup>
                {errors && errors.password && <Text color="red">{errors.password.message}</Text>}
              </Flex>

              <Button
                type="submit"
                loadingText="Đăng nhập"
                isLoading={isLoading}
                w="full"
                colorScheme="blue"
                mt={5}
                fontSize={16}
                h={12}
              >
                Đăng nhập
              </Button>
            </Flex>
          </form>
        </Flex>

        <Flex p={4} gap={2}>
          <Text>Powered by</Text>
          <Link
            href="https://protontech.vn"
            target="_blank"
            rel="noopener noreferrer"
            color="blue.500"
            fontWeight={700}
          >
            Proton Tech
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
