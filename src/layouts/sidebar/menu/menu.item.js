import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  const { route, icon, title, subs } = item;
  const [showSubMenu, setShowSubMenu] = useState(false);

  if (route && !subs) {
    return (
      <Link to={route} key={title}>
        <Flex _hover={{ bgColor: 'main.2' }} px={5} py={4} transitionDuration="250ms" data-group>
          <Flex align="center" gap={3}>
            <Flex w="18px">
              <Icon as={icon} color="#a2a3b7" _groupHover={{ color: '#3699FF' }} transitionDuration="250ms" />
            </Flex>
            <Text as="span" color="#a2a3b7" _groupHover={{ color: '#FFF' }} transitionDuration="250ms">
              {title}
            </Text>
          </Flex>
        </Flex>
      </Link>
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
          transitionDuration="250ms"
          data-group
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <Flex align="center" gap={3}>
            <Flex w="18px">
              <Icon
                as={icon}
                color={showSubMenu ? '#3699FF' : '#a2a3b7'}
                _groupHover={{ color: '#3699FF' }}
                transitionDuration="250ms"
              />
            </Flex>
            <Text
              as="span"
              color={showSubMenu ? '#FFF' : '#a2a3b7'}
              _groupHover={{ color: '#FFF' }}
              transitionDuration="250ms"
            >
              {title}
            </Text>
          </Flex>
          <Icon
            as={showSubMenu ? FaChevronRight : FaChevronDown}
            color={showSubMenu ? '#FFF' : '#a2a3b7'}
            fontSize={13}
            _groupHover={{ color: '#FFF' }}
            transitionDuration="250ms"
          />
        </AccordionButton>
        <AccordionPanel p={0} pl={0}>
          {subs.map((i) => {
            const { route: subRoute, title: subTitle } = i;
            return (
              <Link to={subRoute} key={subTitle}>
                <Flex _hover={{ bgColor: 'main.2' }} pl="38px" pr={5} py={3} transitionDuration="250ms" data-group>
                  <Flex align="center" gap={3}>
                    <Box
                      as="span"
                      w="4px"
                      h="4px"
                      borderRadius="full"
                      bgColor="#a2a3b7"
                      _groupHover={{ bgColor: '#3699FF' }}
                    />
                    <Text as="span" color="#a2a3b7" _groupHover={{ color: '#FFF' }} transitionDuration="250ms">
                      {subTitle}
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default memo(MenuItem);
