"use client";

import { TestimonialsData } from "../db/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box border="1px solid #E5E5E5" py={14} mb={10}>
      <Container mx="auto" px={["1rem", "2rem", "4rem", "5rem", "6rem"]} py={8}>
        {/* header section start here */}
        <Text
          as="h2"
          textAlign={{ base: "left", md: "center" }}
          mb={8}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
        >
          What are the Customers
          <br /> Saying about us ?
        </Text>
        <Text
          as="p"
          fontSize="xl"
          fontWeight="medium"
          textAlign="center"
          mb={8}
          color="gray.500"
        >
          Top-tier People use and{" "}
          <Text
            as="span"
            color="brandSecondary.400"
            py={1}
            px=".5rem"
            bg="brandSecondary.100/50"
            fontWeight="semibold"
            borderLeftRadius="md"
            borderRightColor="#d92c2c"
            borderRightWidth="3px"
          >
            love eVoty
          </Text>{" "}
        </Text>

        {/* Testimonial customers Carousel  cards start here */}
        <Slider {...settings}>
          {TestimonialsData.map((item) => (
            <Box key={item.id} my={6}>
              <Flex
                flexDir="column"
                mx={2}
                rounded="lg"
                shadow="0 10px 15px -3px rgb(0 0 0 / 0.2)"
                bg="primary/5"
                p={4}
              >
                <Flex mb={2}>
                  <Image
                    src={item.img}
                    alt="profile-img"
                    w={20}
                    h={20}
                    rounded="full"
                  />
                  <Flex flexDir="column" ml={4} justifyContent="center">
                    <Text as="span" fontWeight="bold">
                      {item.name}
                    </Text>
                    <Text as="p" fontSize="sm">
                      {item.role}
                    </Text>
                  </Flex>
                </Flex>
                <Box py={2} spaceY={4}>
                  <Text as="p" fontSize="sm" color="gray.500">
                    {item.desc}
                  </Text>
                  {/* Ratings (e.g., stars) */}
                  <Text as="p">{item.rating}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
