"use client";
import { BannersData } from "../db/data";
import { motion, MotionProps } from "framer-motion";
import { SlideUp } from "../utility/animation";
import {
  Box,
  Button,
  chakra,
  Container,
  HeadingProps,
  TextProps,
  ImageProps,
  Link,
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
      w="full"
      mx="auto"
      px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
      py={{ base: "2rem", md: "4rem" }}
    >
      <Box spaceY={{ base: 4, md: 6 }}>
        <Text
          as="h2"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          color="primary"
        >
          How our&nbsp;
          <Text as="span" color="brandSecondary.400">
            e
          </Text>
          Voty app works ?
        </Text>
        <Text
          as="h3"
          textStyle="xl"
          textAlign="center"
          fontWeight="semibold"
          color="gray.600"
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
              // py="2rem"
              gap="1rem"
            >
              {/* banner image section */}
              <Stack
                p={2}
                order={item.id === 2 ? { base: "none", md: 2 } : undefined}
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
                  bgBlendMode="screen"
                  boxShadow="0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2);"
                />
              </Stack>
              {/* banner text section */}
              <Box
                {...(item.id === 2
                  ? {
                      minH: "fit-content",
                      textAlign: "left",
                    }
                  : {
                      display: "flex",
                    })}
                position="relative"
                p={{ base: 4, md: 11 }}
                w="full"
                spaceY={{ base: 2, md: 4 }}
              >
                <Box
                  {...(item.id === 1
                    ? {
                        position: { md: "absolute" },
                        insetY: { md: 0 },
                        right: { md: 0 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        w: "fit-content",
                        px: { md: 4, lg: 0 },
                      }
                    : {
                        py: 4,
                      })}
                >
                  <MotionHeading
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    textStyle="2xl"
                    spaceY={4}
                    fontWeight="semibold"
                    color="gray.600"
                  >
                    {item.title}
                  </MotionHeading>
                  <MotionText
                    variants={SlideUp(0.7)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    maxW={{ base: "sm", lg: "lg" }}
                    textStyle="lg"
                    color="gray.600"
                    my={{ base: 2, lg: 4 }}
                  >
                    {item.description}
                  </MotionText>
                  <MotionText
                    variants={SlideUp(0.9)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    {...(item.id === 2 ? { mt: 8 } : { mt: 4 })}
                  >
                    <Link href={item.button.link} target="_blank">
                      <Button
                        variant="outline"
                        border="1px solid #e05151"
                        size="lg"
                        display="flex"
                        alignItems="center"
                        color="brandSecondary.500"
                        _hover={{ bg: "brandSecondary.500", color: "white" }}
                      >
                        {item.button.desc}
                      </Button>
                    </Link>
                  </MotionText>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Box>
    </Container>
  );
};

export default Banners;
