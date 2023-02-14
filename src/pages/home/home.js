import { Box, Flex, Heading, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Logo from 'assets/images/logo.png';
import { Helmet } from 'react-helmet';
import { useScrollTop } from 'utils/helper';

const Home = () => {
  useScrollTop();

  const INTRO_DATA = [
    {
      title: 'Giới thiệu',
      content: 'Khung website với các tính năng phổ biến cho CMS'
    },
    {
      title: 'Công nghệ',
      content: 'React + Chakra UI + Recoil + React Router + React Query'
    },
    {
      title: 'Tính năng',
      content: 'Khung CMS, Responsive, CRUD example, Menu level 1-2-3, Authentication, Error boundary, React Helmet...'
    }
  ];

  return (
    <Flex direction="column">
      <Helmet>
        <title>Bảng điều khiển | CMS Pro</title>
      </Helmet>
      <Box mt={{ xs: 5, md: 32 }} w={{ xs: '90%', md: '80%', lg: '50%' }} mx="auto">
        <Flex align="center" gap={3}>
          <Image src={Logo} boxSize={16} />
          <Heading as="h2" fontSize={24} fontWeight={600} noOfLines={1}>
            CMS Pro
          </Heading>
        </Flex>

        <UnorderedList mt={20}>
          {INTRO_DATA.map((item) => {
            const { title, content } = item;
            return (
              <ListItem mb={5} key={title}>
                <Flex>
                  <Text fontWeight={600} as="span" fontSize={{ xs: 14, md: 16 }} w={{ xs: '30%', md: '25%' }}>
                    {title}:
                  </Text>{' '}
                  <Text as="span" fontSize={{ xs: 14, md: 16 }} w={{ xs: '70%', md: '75%' }}>
                    {content}
                  </Text>
                </Flex>
              </ListItem>
            );
          })}
        </UnorderedList>

        <Flex gap={2} mt={20}>
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
      </Box>
    </Flex>
  );
};

export default Home;
