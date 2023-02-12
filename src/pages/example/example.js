import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { useScrollTop } from 'utils/helper';

const Example = () => {
  useScrollTop();

  return (
    <Flex>
      <Helmet>
        <title>Example | CMS Pro</title>
      </Helmet>
      Home Page
    </Flex>
  );
};

export default Example;
