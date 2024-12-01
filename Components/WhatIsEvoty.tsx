import { Box, Stack, Container, Text } from "@chakra-ui/react";

const WhatIsEVoty = () => {
  return (
    <Box bg="#F1F4F5" borderRadius={{ base: "3xl", lg: "none" }}>
      <Container
        w="full"
        mx="auto"
        px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
        py="4rem"
      >
        <Box
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          color="primary"
          mb="2rem"
        >
          What is{" "}
          <Text as="span" color="brandSecondary.400">
            e
          </Text>
          Voty ?
        </Box>
        <Stack
          textStyle={{ base: "18px", md: "lg" }}
          textAlign="center"
          color="gray.700"
          mt="1rem"
          px={{ md: "2rem", lg: "5rem" }}
          mx={{ md: "auto" }}
          spaceY="1rem"
        >
          <Text as="p">
            Electronic voting system &quot;eVoty&quot; is a community-driven,
            open-source, and transparent voting system designed to democratize
            voting for all. It aims to create a more equitable, accessible, and
            transparent voting experience for users of the App from all around
            the World.
          </Text>

          <Text as="p">
            This is a platform that allows users to vote on various Lorem ipsum
            dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor
            incididunt ut labore et laborused sed do eiusmod tempor incididunt
            ut labore et laborused.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default WhatIsEVoty;
