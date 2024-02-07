import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/UserReducer/action";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useSelector((store) => store.userReducer.isAuth);
  const userName = useSelector((store) => store.userReducer.name);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handelLogout = async () => {
    await dispatch(Logout());
  };

  return (
    <div style={{ position: "sticky" }}>
      <>
        <Flex bg="blue.500" p={4} align="center">
          <Box p="2">
            <Text
              color="white"
              fontSize="xl"
              fontWeight="bold"
              onClick={() => {
                navigate("/");
              }}
              cursor={"pointer"}
            >
              Electronic Health Records
            </Text>
          </Box>
          <Spacer />

          <Box display={{ base: "none", md: "block" }}>
            <Button
              mr={2}
              colorScheme="whiteAlpha"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Patient Records
            </Button>

            <Button
              mr={2}
              colorScheme="whiteAlpha"
              onClick={() => {
                navigate("*");
              }}
            >
              Reports
            </Button>
            <Button
              mr={2}
              colorScheme="whiteAlpha"
              onClick={() => {
                navigate("*");
              }}
            >
              Settings
            </Button>
            {isAuth ? (
              <Button mr={2} colorScheme="whiteAlpha" onClick={handelLogout}>
                Logout
              </Button>
            ) : (
              <Button
                mr={2}
                colorScheme="whiteAlpha"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
            {isAuth === true ? (
              <>
                <Avatar
                  size="md"
                  mr={2}
                  name={userName}
                  src={`url_to_avatar_image/${userName}`}
                />
                <Text color="white">{userName}</Text>
              </>
            ) : null}
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="whiteAlpha"
              onClick={onOpen}
            />
          </Box>
        </Flex>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>EHR Navigation</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <Button colorScheme="teal" w="full">
                    Patient Records
                  </Button>
                  <Button colorScheme="teal" w="full">
                    Appointments
                  </Button>
                  <Button colorScheme="teal" w="full">
                    Reports
                  </Button>
                  <Button colorScheme="teal" w="full">
                    Settings
                  </Button>
                  <Button colorScheme="teal" w="full">
                    Logout
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    </div>
  );
};
