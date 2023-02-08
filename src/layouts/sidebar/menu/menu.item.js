import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Flex, Icon, Text } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const { route, icon, title, subs } = item;
  const [showSubMenu, setShowSubMenu] = useState(false);

  if (route && !subs) {
    return (
      <Flex key={title} _hover={{ bgColor: 'main.2' }} px={5} py={4}>
        <Link to={route}>
          <Flex align="center" gap={3}>
            <Flex w={5}>
              <Icon as={icon} />
            </Flex>
            <Text as="span" color="#a2a3b7">
              {title}
            </Text>
          </Flex>
        </Link>
      </Flex>
    );
  }

  return (
    <Accordion key={title} allowToggle>
      <AccordionItem border="none">
        <AccordionButton
          py={4}
          px={5}
          justifyContent="space-between"
          bgColor={showSubMenu ? 'main.2' : 'main.1'}
          _hover={{ bgColor: 'main.2' }}
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <Flex align="center" gap={3}>
            <Flex w="18px">
              <Icon as={icon} />
            </Flex>
            <Text as="span" color="#a2a3b7">
              {title}
            </Text>
          </Flex>
          {showSubMenu ? <FaChevronDown color="#a2a3b7" size={13} /> : <FaChevronRight color="#a2a3b7" size={13} />}
        </AccordionButton>
        <AccordionPanel p={0} pl={0}>
          {subs.map((i) => {
            const { route: subRoute, title: subTitle } = i;
            return (
              <Flex key={subTitle} _hover={{ bgColor: 'main.2' }} pl="46px" pr={5} py={3}>
                <Link to={subRoute}>
                  <Flex align="center" gap={3}>
                    <Text as="span" color="#a2a3b7">
                      {subTitle}
                    </Text>
                  </Flex>
                </Link>
              </Flex>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default memo(MenuItem);
