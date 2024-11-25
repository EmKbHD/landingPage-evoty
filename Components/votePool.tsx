"use client";
import { motion, MotionProps } from "framer-motion";
import { SlideLeft } from "../utility/animation";
import {
  Box,
  BoxProps,
  Button,
  HStack,
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
    <Box>
      <Container>
        <MotionHeading
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          Votes and Pools are{" "}
          <Text as="span">
            easy to
            <br /> use and secured
          </Text>
        </MotionHeading>
        <HStack>
          <MotionBox
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
          >
            <Button>Try Free</Button>
            <Button>Go Premium</Button>
          </MotionBox>
        </HStack>
      </Container>
    </Box>
  );
};

export default VotePool;
