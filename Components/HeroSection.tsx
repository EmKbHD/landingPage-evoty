"use client";

import { motion, MotionProps } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";
import { HiMiniPlayCircle } from "react-icons/hi2";
import {
  chakra,
  Box,
  Stack,
  Flex,
  Text,
  Button,
  Container,
  BoxProps,
  HeadingProps,
  ImageProps,
} from "@chakra-ui/react";

const Hero = () => {
  // Define Motion<tag> component with correct typings
  const MotionBox = chakra(motion.div) as React.FC<BoxProps & MotionProps>;
  const MotionHeading = chakra(motion.h1) as React.FC<
    HeadingProps & MotionProps
  >;
  // const MotionText = chakra(motion.p) as React.FC<TextProps & MotionProps>;
  const MotionImage = chakra(motion.img) as React.FC<ImageProps & MotionProps>;
  return (
    <Container
      display="grid"
      placeContent="center"
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      minH="568px"
      position="relative"
      w="dvw"
      mx="auto"
      px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
      py="1.25rem"
    >
      {/* Company information */}
      <Flex
        border={"1px solid #E5E5E5"}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Stack spaceY="8">
          <MotionHeading
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            textStyle={{ base: "4xl", md: "5xl", lg: "7xl" }}
            fontFamily="suse"
            fontWeight="bold"
            textTransform="capitalize"
            lineHeight={1.25}
            color="primary"
          >
            Vote anywhere <br />{" "}
            <Text
              as="span"
              color="brandSecondary.400"
              py="1"
              pl="0.5rem"
              pr="1rem"
              bg="brandSecondary.100/50"
              borderLeftRadius="md"
              borderRightColor="#d92c2c"
              borderRightWidth="3px"
            >
              you are
            </Text>{" "}
            {""}
          </MotionHeading>
          <MotionBox
            variants={SlideRight(1.2)}
            initial="hidden"
            animate="visible"
            textStyle={{ md: "xl" }}
            maxWidth={{ xl: "500px" }}
          >
            <Text
              as="span"
              textStyle="xl"
              fontWeight="semibold"
              color="gray.700"
            >
              Easily Create Elections and Pools
            </Text>

            <Box
              as="ol"
              mt="2"
              textStyle="lg"
              lineHeight="1.5"
              listStyleType="disc"
              ml="5"
              color="gray.600"
            >
              <li>Simple elections and pool management</li>
              <li>Result in real-time</li>
              <li>Secure and reliable</li>
            </Box>
          </MotionBox>
          {/* CTA button here */}
          <MotionBox
            variants={SlideRight(1.5)}
            initial="hidden"
            animate="visible"
            display="flex"
            maxWidth={{ md: "400px" }}
            fontWeight="semibold"
            gap="1rem"
            justifyContent={{ md: "flex-start" }}
          >
            <Button
              variant="solid"
              bg="primary"
              color="white"
              size="lg"
              maxW="187px"
              flex="1"
              _hover={{
                bg: "white",
                color: "primary",
                border: "1px solid rgb(5, 45, 82)",
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              border="1px solid #e05151"
              size="lg"
              display="flex"
              alignItems="center"
              flex="1"
              color="brandSecondary.500"
              _hover={{ bg: "brandSecondary.500", color: "white" }}
            >
              <HiMiniPlayCircle />
              <Text as="span">Watch Demo</Text>
            </Button>
          </MotionBox>
        </Stack>
      </Flex>
      {/* Hero image */}
      <Flex
        border={"1px solid #E5E5E5"}
        justifyContent="center"
        alignItems="center"
        w="full"
        order={{ md: "2" }}
      >
        <MotionImage
          variants={SlideLeft(1)}
          animate="visible"
          initial={{ opacity: 0, x: 100 }}
          src="/assets/vote-undraw.svg"
          alt="VOTE IMAGE"
          w={{ base: "21.875rem", md: "34.375rem", xl: "43.75rem" }}
          h="3/4"
          filter="drop-shadow(-6px 8px 15px rgba(0, 0, 0, 0.3))"
        />
      </Flex>
    </Container>
  );
};

export default Hero;
