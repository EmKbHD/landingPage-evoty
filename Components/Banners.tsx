"use client";
import { BannersData } from "../db/data";
import { motion, MotionProps } from "framer-motion";
import { SlideUp } from "../utility/animation";
import {
  Box,
  chakra,
  Container,
  HeadingProps,
  TextProps,
  ImageProps,
  Stack,
  Text,
  Grid,
} from "@chakra-ui/react";

const Banners = () => {
  // Define custom Motion<tag> component with correct typings
  const MotionHeading = chakra(motion.h1) as React.FC<
    HeadingProps & MotionProps
  >;
  const MotionText = chakra(motion.p) as React.FC<TextProps & MotionProps>;
  const MotionImage = chakra(motion.img) as React.FC<ImageProps & MotionProps>;

  return (
    <Container
      border="1px solid #E5E5E5"
      w="full"
      mx="auto"
      px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
      py="4rem"
    >
      <Box spaceY="6">
        <Text
          as="h2"
          textStyle="3xl"
          fontWeight="semibold"
          textAlign="center"
          color="primary"
          mb="3rem"
        >
          How{" "}
          <Text as="span" color="brandSecondary.400">
            e
          </Text>
          Voty works ?
        </Text>
        <Text
          as="span"
          textStyle="lg"
          fontWeight="semibold"
          color="gray.600"
          py={{ md: "2rem" }}
        >
          Why create your vote with us ?
        </Text>
        <Text as="p" color="gray.600" fontSize="lg">
          Let&apos;s start by identifying what the PM is not. The PM is not the
          owner of the project. The PM is the sponsor, i.e. the person who
          appoints the PM and makes the commitment. eVoty is a platform that
          allows users to easily create, manage, and vote on their favorite
          candidates. It&apos;s designed to be accessible, transparent, and easy
          to use for everyone.
        </Text>
        {/* Render each banner as a section with image and text */}
        {BannersData.map((item) => {
          return (
            <Grid
              as="section"
              key={item.id}
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
              placeContent="center"
              placeItems="center"
              py="2rem"
              gap="1rem"
            >
              {/* banner image section */}
              <Stack
                p={2}
                order={item.id === 2 ? { base: "none", md: 2 } : undefined}
                boxShadow="0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);"
              >
                <MotionImage
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2,
                  }}
                  src={item.img_url}
                  alt="dashboard image"
                  objectFit="cover"
                  minW="360px"
                />
              </Stack>
              {/* banner text section */}
              <div
                className={
                  item.id === 2
                    ? " relative p-4 md:p-11 w-full min-h-fit space-y-4 text-left"
                    : " relative p-4 md:p-11 w-full space-y-4 flex "
                }
              >
                <div
                  className={
                    item.id === 1
                      ? "md:absolute md:inset-y-0 md:right-0 flex flex-col justify-center w-fit md:px-4 lg:px-0"
                      : " py-4 "
                  }
                >
                  <MotionHeading
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </MotionHeading>
                  <MotionText
                    variants={SlideUp(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </MotionText>
                  <MotionText
                    variants={SlideUp(0.9)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    className={item.id === 2 ? "mt-8" : "mt-4"}
                  >
                    <a href={item.button.link} target="_blank">
                      {item.button.desc}
                    </a>
                  </MotionText>
                </div>
              </div>
            </Grid>
          );
        })}
      </Box>
    </Container>
  );
};

export default Banners;
