import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const MenuItem = ({ item, level = 1 }) => {
  const { route, icon, title, subs } = item;
  const [showSubMenu, setShowSubMenu] = useState(false);
  const location = useLocation();
  const isActive = route && route === location.pathname;

  useEffect(() => {
    if (!isActive) {
      setShowSubMenu(isActive);
    }
  }, [isActive]);

  if (route && !subs) {
    return (
      <Link to={route} key={title}>
        <Flex
          bgColor={isActive ? 'main.2' : 'main.1'}
          _hover={{ bgColor: 'main.2' }}
          pl={5}
          pr={3.5}
          py={4}
          transitionDuration="250ms"
          data-group
        >
          <Flex align="center" gap={3}>
            <Flex
              w="18px"
              pl={icon ? 0 : level === 3 ? 8 : 4}
              opacity={level === 3 ? 0 : 1}
              visibility={level === 3 ? 'hidden' : 'visible'}
            >
              {!!icon ? (
                <Icon
                  as={icon}
                  color={showSubMenu || isActive ? '#3699FF' : '#a2a3b7'}
                  _groupHover={{ color: '#3699FF' }}
                  transitionDuration="250ms"
                />
              ) : (
                <Box
                  as="span"
                  w="4px"
                  h="4px"
                  borderRadius="full"
                  bgColor={isActive ? '#3699FF' : '#a2a3b7'}
                  _groupHover={{ bgColor: '#3699FF' }}
                />
              )}
            </Flex>
            <Text
              noOfLines={1}
              as="span"
              color={isActive ? '#FFF' : '#a2a3b7'}
              _groupHover={{ color: '#FFF' }}
              transitionDuration="250ms"
            >
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
          pl={5}
          pr={3.5}
          justifyContent="space-between"
          bgColor={showSubMenu ? 'main.2' : 'main.1'}
          _hover={{ bgColor: 'main.2' }}
          transitionDuration="250ms"
          data-group
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <Flex align="center" gap={3}>
            <Flex w="18px" pl={icon ? 0 : 4}>
              {!!icon ? (
                <Icon
                  as={icon}
                  color={showSubMenu ? '#3699FF' : '#a2a3b7'}
                  _groupHover={{ color: '#3699FF' }}
                  transitionDuration="250ms"
                />
              ) : (
                <Box
                  as="span"
                  w="4px"
                  h="4px"
                  borderRadius="full"
                  bgColor="#a2a3b7"
                  _groupHover={{ bgColor: '#3699FF' }}
                />
              )}
            </Flex>
            <Text
              as="span"
              noOfLines={1}
              color={showSubMenu ? '#FFF' : '#a2a3b7'}
              _groupHover={{ color: '#FFF' }}
              transitionDuration="250ms"
            >
              {title}
            </Text>
          </Flex>
          <Icon
            ml={2}
            as={FaChevronRight}
            color={showSubMenu ? '#FFF' : '#a2a3b7'}
            fontSize={12}
            transform={showSubMenu ? 'rotate(90deg)' : undefined}
            _groupHover={{ color: '#FFF' }}
            transitionDuration="250ms"
          />
        </AccordionButton>
        <AccordionPanel p={0} pl={0}>
          {subs.map((itemSub) => {
            return <MenuItem item={itemSub} key={itemSub.title} level={level + 1} />;
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default memo(MenuItem);
