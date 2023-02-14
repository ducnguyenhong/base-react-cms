import { Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { Helmet } from 'react-helmet';

const ChangePassword = () => {
  return (
    <Flex>
      <Helmet>
        <title>Đổi mật khẩu | CMS Pro</title>
      </Helmet>
      ChangePassword
    </Flex>
  );
};

export default memo(ChangePassword);
