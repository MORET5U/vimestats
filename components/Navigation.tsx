import { HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import SearchModal from "./SearchModal";
import Link from "next/link";
import React, { createRef, FC, useState } from "react";
import { FaDiscord, FaGithub, FaHome, FaShieldAlt } from "react-icons/fa";
import { MdExposureNeg1 } from "react-icons/md";

interface DrawerButtonProps {
  title: string;
  icon: React.ReactElement;
  href: string;
}

const DrawerButton: FC<DrawerButtonProps> = ({ title, icon, href }) => (
  <>
    <Link href={href}>
      <Button size="lg" variant="ghost" my={2} paddingLeft={2} justifyContent="left" leftIcon={icon} isFullWidth>
        {title}
      </Button>
    </Link>
  </>
);

const Navigation: FC = () => {
  const menuButtonRef = createRef<HTMLButtonElement>();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const menuDrawer = useDisclosure();
  const searchModal = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const barShadow = useColorModeValue("md", "xl");

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={3} boxShadow={barShadow}>
        <Flex align="center">
          <IconButton
            ref={menuButtonRef!}
            onClick={menuDrawer.onOpen}
            variant="outlined"
            icon={<HamburgerIcon />}
            aria-label="Drawer Menu"
          />
          <Drawer
            isOpen={menuDrawer.isOpen}
            placement="left"
            onClose={menuDrawer.onClose}
            finalFocusRef={menuButtonRef}
            size="xs"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerBody>
                  <VStack>
                    <DrawerButton title="Главная" icon={<FaHome />} href="/" />
                    <DrawerButton title="Модераторы" icon={<FaShieldAlt />} href="/staff" />
                    <DrawerButton title="Принятоснятия" icon={<MdExposureNeg1 />} href="/demotions" />

                    <Divider />

                    <DrawerButton title="Discord" icon={<FaDiscord />} href="https://go.defracted.net/discord" />
                    <DrawerButton
                      title="Исходный код"
                      icon={<FaGithub />}
                      href="https://github.com/defracted/snowflake"
                    />
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

          <Link href="/">
            <a className="navbar_title">
              <Text fontSize="2xl">
                <strong>VIME</strong>STATS
              </Text>
            </a>
          </Link>
        </Flex>

        <Box display={{ base: "block", md: "block" }} flexBasis={{ base: "auto", md: "auto" }}>
          <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <HStack spacing={2}>
              <IconButton
                onClick={toggleColorMode}
                aria-label="Изменить тему"
                size="sm"
                rounded="md"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              />
              <IconButton
                onClick={searchModal.onOpen}
                size="sm"
                rounded="md"
                icon={<SearchIcon />}
                aria-label="Поиск игрока"
              />
            </HStack>
          </Flex>
        </Box>
      </Flex>
      <SearchModal
        onClose={searchModal.onClose}
        isOpen={searchModal.isOpen}
        value={searchQuery}
        setValue={setSearchQuery}
      />
    </>
  );
};

export default Navigation;
