import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Icon, Text } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { showSidebarAtom } from 'state-manage/recoil';

const MenuItem = ({ item, level = 1 }) => {
  const { route, icon, title, subs } = item;
  const [showSubMenu, setShowSubMenu] = useState(false);
  const location = useLocation();
  const isActive = route && route === location.pathname;
  const showSidebar = useRecoilValue(showSidebarAtom);

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
          h="49px"
          transitionDuration="250ms"
          data-group
          justify={showSidebar ? 'flex-start' : 'center'}
        >
          <Flex align="center" gap={showSidebar ? 3 : 0}>
            <Flex
              w="18px"
              justify="center"
              pl={icon || !showSidebar ? 0 : level === 3 ? 8 : 4}
              opacity={level === 3 && showSidebar ? 0 : 1}
              visibility={level === 3 && showSidebar ? 'hidden' : 'visible'}
            >
              {!showSidebar && level === 3 && <Text color="#4c4e6f">...</Text>}
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
                  display={level === 3 && !showSidebar ? 'none' : 'block'}
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
              {showSidebar ? title : ''}
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
          h="49px"
          pl={5}
          pr={3.5}
          bgColor="main.1"
          _hover={{ bgColor: 'main.2' }}
          transitionDuration="250ms"
          data-group
          justifyContent={showSidebar ? 'space-between' : 'center'}
          onClick={() => setShowSubMenu(!showSubMenu)}
        >
          <Flex align="center" gap={showSidebar ? 3 : 0}>
            <Flex w="18px" pl={icon || !showSidebar ? 0 : 4} justify="center">
              {!!icon ? (
                <Icon as={icon} color="#a2a3b7" _groupHover={{ color: '#3699FF' }} transitionDuration="250ms" />
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
            <Text as="span" noOfLines={1} color="#a2a3b7" _groupHover={{ color: '#FFF' }} transitionDuration="250ms">
              {showSidebar ? title : ''}
            </Text>
          </Flex>
          {showSidebar && (
            <Icon
              ml={2}
              as={FaChevronRight}
              color="#a2a3b7"
              fontSize={12}
              transform={showSubMenu ? 'rotate(90deg)' : undefined}
              _groupHover={{ color: '#FFF' }}
              transitionDuration="250ms"
            />
          )}
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
