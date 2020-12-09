import React, { FC, createRef, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { FaDiscord, FaGithub, FaHome, FaShieldAlt } from "react-icons/fa";
import { MdExposureNeg1 } from "react-icons/md";
import Link from "next/link";
import SearchModal from "./SearchModal";

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={3} boxShadow="md">
        <Flex align="center">
          <IconButton
            ref={menuButtonRef!}
            onClick={onOpen}
            variant="outlined"
            icon={<HamburgerIcon />}
            aria-label="Drawer Menu"
          />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={menuButtonRef} size="xs">
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
            <IconButton onClick={onSearchOpen} size="sm" rounded="md" icon={<SearchIcon />} aria-label="Поиск игрока" />
          </Flex>
        </Box>
      </Flex>
      <SearchModal onClose={onSearchClose} isOpen={isSearchOpen} value={searchQuery} setValue={setSearchQuery} />
    </>
  );
};

export default Navigation;
