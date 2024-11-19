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
  // TextProps,
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
      border={"1px solid #E5E5E5"}
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
            fontFamily="heading"
            fontWeight="bold"
            textTransform="capitalize"
            lineHeight={1.25}
            color="primary"
          >
            Vote anywhere <br />{" "}
            <Text as="span" color="brand.400">
              you are
            </Text>{" "}
            {""}
          </MotionHeading>
          <MotionBox
            variants={SlideRight(1.2)}
            initial="hidden"
            animate="visible"
            textStyle={{ md: "xl" }}
            color="gray.700"
            maxWidth={{ xl: "500px" }}
          >
            <Text as="span" textStyle="xl" fontWeight="semibold">
              Easily Create Elections and Pools
            </Text>

            <Box
              as="ol"
              mt="2"
              textStyle="lg"
              lineHeight="1.5"
              listStyleType="disc"
              ml="5"
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
            maxWidth="400px"
            fontWeight="semibold"
            gap="4"
            justifyContent={{ md: "flex-start" }}
          >
            <Button
              variant="solid"
              bg="primary"
              color="white"
              size="lg"
              maxW="190px"
              flexGrow="1"
            >
              Get Started
            </Button>

            <Button
              variant="outline"
              border="1px solid #e05151"
              size="lg"
              display="flex"
              alignItems="center"
              _hover={{ bg: "brand.500" }}
            >
              <HiMiniPlayCircle fontSize="32px" color="red" />
              <Text as="span" color="brand.500">
                Watch Demo
              </Text>
            </Button>
          </MotionBox>
        </Stack>
      </Flex>
      {/* Hero image */}
      <Box border={"1px solid #E5E5E5"}>
        <MotionImage
          variants={SlideLeft(1)}
          animate="visible"
          initial={{ opacity: 0, x: 100 }}
          src="/assets/vote-undraw.svg"
          alt="VOTE IMAGE"
        />
      </Box>
    </Container>
  );
};

export default Hero;
