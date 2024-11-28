"use client";
import { motion, MotionProps } from "framer-motion";
import { SlideLeft } from "../utility/animation";
import {
  BoxProps,
  Button,
  Flex,
  VStack,
  chakra,
  Container,
  HeadingProps,
  Text,
} from "@chakra-ui/react";
const VotePool = () => {
  // Define Motion<tag> component with correct typings
  const MotionBox = chakra(motion.div) as React.FC<BoxProps & MotionProps>;
  const MotionHeading = chakra(motion.h1) as React.FC<
    HeadingProps & MotionProps
  >;
  return (
    <Flex w="full" bg="brandSecondary.50/50">
      <Container
        w="full"
        mx="auto"
        px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
        py="4rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <MotionHeading
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          textStyle={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          color="brandPrimary.900"
        >
          Votes and Pools are{" "}
          <Text as="span" color="brandSecondary.400">
            Easy to
            <br /> Use and Secured
          </Text>
        </MotionHeading>
        <VStack pt={8} w="full">
          <MotionBox
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth={{ base: "320px", md: "400px" }}
            w="full"
          >
            <Button
              width={["100px", "150px", "200px"]}
              variant="solid"
              bg="brandPrimary.900"
              color="white"
              size="lg"
              mr={{ base: 2, md: 4 }}
              _hover={{
                bg: "transparent",
                color: "primary",
                border: "1px solid rgb(5, 45, 82)",
                transform: "scale(1.05)",
                transition: "transform 300ms ease-in-out",
              }}
            >
              Try Free
            </Button>
            <Button
              width={["100px", "150px", "200px"]}
              variant="outline"
              borderColor="brandSecondary.500"
              color="brandSecondary.500"
              size="lg"
              _hover={{
                bg: "brandSecondary.500",
                color: "white",
                transform: "scale(1.05)",
                transition: "transform 300ms ease-in-out",
              }}
              px={2}
            >
              Go Premium
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Flex>
  );
};

export default VotePool;
