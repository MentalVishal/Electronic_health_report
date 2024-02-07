import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box>
        {/* Hero Section */}
        <Box bg="teal.500" py="20" px="4">
          <Flex
            maxW="7xl"
            mx="auto"
            alignItems="center"
            justifyContent="space-between"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box maxW={{ base: "lg", lg: "xl" }} mr={{ base: 0, lg: "12" }}>
              <Text
                color="white"
                fontSize={{ base: "3xl", lg: "5xl" }}
                fontWeight="bold"
                mb="6"
              >
                Electronic Health Reports Made Easy
              </Text>
              <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
                Access your health records securely and effortlessly with our
                intuitive platform.
              </Text>
              <Button
                colorScheme="whiteAlpha"
                color="white"
                px="8"
                py="4"
                fontSize="lg"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get Started
              </Button>
            </Box>
            <Image
              src="https://imgs.search.brave.com/KudFiXhDXvT3oA3SkYxiPiGIZeAbQag9cInNU0k3Tkc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzI4Lzc0LzI1/LzM2MF9GXzQyODc0/MjU3Nl84SGdGRDA2/YVRWaTkyNWVGeUwy/MEJNbmhxZUhManVy/aS5qcGc"
              alt="Electronic Health Reports"
              borderRadius="lg"
              boxShadow="lg"
              maxW={{ base: "full", lg: "md" }}
              m={2}
            />
          </Flex>
        </Box>

        {/* Features Section */}
        <Box bg="gray.100" py="20" px="4">
          <Flex
            maxW="7xl"
            mx="auto"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
          >
            <Box
              maxW={{ base: "lg", lg: "xl" }}
              textAlign="center"
              mb={{ base: "12", lg: 0 }}
            >
              <Text
                color="teal.500"
                fontSize={{ base: "2xl", lg: "4xl" }}
                fontWeight="bold"
                mb="6"
              >
                Features That Simplify Your Health Management
              </Text>
              <Text fontSize={{ base: "lg", lg: "xl" }} color="gray.600" mb="8">
                Our platform offers a range of features designed to streamline
                the process of accessing and managing your electronic health
                reports.
              </Text>
            </Box>
            <Flex
              flexDir="column"
              maxW={{ base: "sm", lg: "xs" }}
              mx={{ base: "auto", lg: "0" }}
              mb={{ base: "8", lg: 0 }}
            >
              <Image
                src="https://imgs.search.brave.com/-laK4vle4SnOVxmcUISF9QsvCq_EfIF0sEnHm4U-KoU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VsZWN0aHViLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wOC9FSFItRmVh/dHVyZXMtVjIuanBn"
                alt="Feature 1"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
              <Image
                src="https://imgs.search.brave.com/__3WdgdJmaK_2qSIlHBTqM6o6oK38fuKgdB06PHrc_M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VsZWN0aHViLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMS9lQ2xpbmlj/YWxXb3Jrcy1Ub3At/UmF0ZWRGZWF0dXJl/cy5qcGc"
                alt="Feature 2"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
            </Flex>
            <Flex
              flexDir="column"
              maxW={{ base: "sm", lg: "xs" }}
              mx={{ base: "auto", lg: "0" }}
              mb={{ base: "8", lg: 0 }}
            >
              <Image
                src="https://imgs.search.brave.com/eOTHllbu-RozZvYDPj4p4K_P58Tjqi_ZIGBh043fI8M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VsZWN0aHViLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMS9CZXN0LUVI/Ui1TeXN0ZW1zLmpw/Zw"
                alt="Feature 3"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
              <Image
                src="https://imgs.search.brave.com/IbFrkZgDIv1xdp0KCd_8zZfRlqFwL5X4DJJO5Jh1Kug/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aWxt/YXRlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMi9I/b3ctdG8tYnVpbGQt/YW4tRUhSLXN5c3Rl/bS1JbmZvZ3JhcGhp/Y3MtMS5qcGc"
                alt="Feature 4"
                borderRadius="lg"
                m="2"
                boxShadow="md"
              />
            </Flex>
          </Flex>
        </Box>

        {/* Call to Action */}
        <Box bg="teal.500" py="20" px="4">
          <Flex
            maxW="7xl"
            mx="auto"
            alignItems="center"
            justifyContent="center"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box
              maxW={{ base: "lg", lg: "xl" }}
              textAlign="center"
              mb={{ base: "12", lg: 0 }}
            >
              <Text
                color="white"
                fontSize={{ base: "3xl", lg: "5xl" }}
                fontWeight="bold"
                mb="6"
              >
                Ready to Take Control of Your Health?
              </Text>
              <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
                Sign up now to start managing your health records with ease.
              </Text>
              <Button
                colorScheme="whiteAlpha"
                color="teal.500"
                background={"wheat"}
                px="8"
                py="4"
                fontSize="lg"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </Button>
            </Box>
            <Image
              src="https://imgs.search.brave.com/IbFrkZgDIv1xdp0KCd_8zZfRlqFwL5X4DJJO5Jh1Kug/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aWxt/YXRlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMi9I/b3ctdG8tYnVpbGQt/YW4tRUhSLXN5c3Rl/bS1JbmZvZ3JhcGhp/Y3MtMS5qcGc"
              alt="Call to Action"
              borderRadius="lg"
              m={3}
              boxShadow="lg"
              maxW={{ base: "full", lg: "md" }}
            />
          </Flex>
        </Box>
      </Box>
    </div>
  );
};
