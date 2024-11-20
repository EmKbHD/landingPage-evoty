"use client";
import { FeaturesData } from "../db/data";
import { SlideLeft } from "../utility/animation";
import { motion, MotionProps } from "framer-motion";
import {
  Box,
  BoxProps,
  chakra,
  Button,
  Container,
  Grid,
  Link,
  Text,
} from "@chakra-ui/react";

const Features = () => {
  // Define Motion<tag> component with correct typings
  const MotionBox = chakra(motion.div) as React.FC<BoxProps & MotionProps>;

  return (
    <Container
      border={"1px solid #E5E5E5"}
      w="full"
      mx="auto"
      px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
      py="4rem"
    >
      <Text
        as="h2"
        fontSize="1.875rem"
        fontWeight="medium"
        pb="1rem"
        textAlign={{ base: "left", md: "center" }}
        fontFamily="suse"
      >
        App Features
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, minmax(0, 1fr))",
        }}
        maxW="fit-content"
        mx="auto"
        mt={{ md: "1rem" }}
        gridGap="1.5rem"
      >
        {FeaturesData.map((item) => {
          return (
            <MotionBox
              variants={SlideLeft(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView="visible"
              spaceY="0.5rem"
              px="1.5rem"
              py="4rem"
              bg="#F1F4F5"
              display="grid"
              rounded="lg"
              _hover={{
                shadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
              }}
            >
              <Box>
                {/* Render icon as a JSX component */}
                {item.icon && <item.icon />}
              </Box>
              <Box>{item.title}</Box>
              <Text as="p">{item.desc}</Text>
              <Link href={item.button.link}>
                <Button>
                  {/* Render icon as a JSX component */}
                  {item.button.desc}
                  {item.button.icon && <item.button.icon />}
                </Button>
              </Link>
            </MotionBox>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Features;
