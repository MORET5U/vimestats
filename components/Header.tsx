import React, { FC, createRef } from "react";
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
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Header: FC = () => {
  const menuButtonRef = createRef<HTMLButtonElement>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} p={3} boxShadow="md">
      <Flex align="center">
        <IconButton
          ref={menuButtonRef!}
          onClick={onOpen}
          variant="outlined"
          icon={<HamburgerIcon />}
          aria-label="Drawer Menu"
        />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={menuButtonRef}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button color="blue">Save</Button>
              </DrawerFooter>
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

      {/* <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box> */}
      {/* 
      <Box display={{ base: show ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}> */}
      <Box display={{ base: "block", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Button size="sm" rounded="md">
            Search
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
