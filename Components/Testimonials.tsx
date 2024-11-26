import { TestimonialsData } from "../db/data";
import Slider from "react-slick";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const Testimonials = () => {
  const settingCarousel = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay set to true
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
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
    <Box>
      <Container className="container">
        {/* header section start here */}
        <Text as="h2">
          What are the Customers
          <br /> Saying about us ?
        </Text>
        {/* testimonials customers card start here */}
        <Slider {...settingCarousel}>
          {TestimonialsData.map((item) => (
            <Box key={item.id}>
              <Flex>
                <Flex>
                  <Image
                    src={item.img}
                    alt="profile-img"
                    className="w-20 h-20 rounded-full"
                  />
                  <Flex className="flex flex-col justify-center ml-4">
                    <strong>{item.name}</strong>
                    <p className="text-sm">{item.role}</p>
                  </Flex>
                </Flex>
                <Box>
                  <Text as="p">{item.desc}</Text>
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
