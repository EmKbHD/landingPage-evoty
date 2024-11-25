import {
  Box,
  Button,
  // chakra,
  // Container,
  // HeadingProps,
  // TextProps,
  // ImageProps,
  // Link,
  // Stack,
  Text,
  Grid,
  Flex,
} from "@chakra-ui/react";

interface Feature {
  title: string;
  details?: string[];
}

type PricingCardProps = {
  category: string;
  price: string;
  detail: string;
  features: Feature[];
  buttonText: string;
  recommended?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  category,
  price,
  detail,
  features,
  buttonText,
  recommended,
}) => {
  return (
    <Grid
      {...(recommended
        ? { position: "relative", color: "white", bg: "primary" }
        : { border: "1px solid gray", borderColor: "gray.200" })}
      w={{ base: "full", md: "1/3" }}
      borderRadius="lg"
      textAlign="center"
      px={{ base: 4, md: 6 }}
    >
      {recommended && (
        <Box
          position="absolute"
          roundedTop="lg"
          top={0}
          left={0}
          color="white"
          textAlign="center"
          bg="brandSecondary.500"
          py={2}
          w="full"
        >
          MOST POPULAR
        </Box>
      )}
      <Box mt={14}>
        <Text as="h3" textStyle="2xl" fontWeight="medium" mb={2}>
          {category}
        </Text>
        <Text
          as="p"
          fontWeight="bold"
          textStyle={{ base: "3xl", md: "4xl" }}
          mb={4}
        >
          {price}
        </Text>
        <Text as="p" mb={4}>
          {detail}
        </Text>
        {/* <Divider borderColor="gray.200" mb={4} /> */}
        <Box
          w="full"
          borderBottom="1px solid gray"
          borderColor="gray.200"
          mb={4}
        />
      </Box>

      <Box as="ul" textAlign="left" spaceY={3}>
        {features.map((feature, index) => (
          <Box as="li" key={index} display="flex" alignItems="flex-start">
            <Text as="span" color="green.500" mr={2}>
              ✔️
            </Text>
            <Box
              {...(recommended ? { color: "white" } : { color: "gray.500" })}
            >
              <Text
                as="h4"
                {...(recommended ? { color: "white" } : { color: "blue.900" })}
                fontWeight="semibold"
              >
                {feature.title}
              </Text>
              <Box as="ul" pl={6} listStyleType="disc" textStyle="sm">
                {feature.details?.map((detail, id) => (
                  <li key={id}>{detail}</li>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Flex w="full" justifyContent="center" alignItems="center" my={8} px={6}>
        <Button
          w="full"
          textAlign="center"
          fontWeight="semibold"
          h="fit"
          color="white"
          py={2}
          px={4}
          bg="brandSecondary.500"
          _hover={{ bg: "brandSecondary.600" }}
          borderRadius="lg"
        >
          {buttonText}
        </Button>
      </Flex>
    </Grid>
  );
};

export default PricingCard;
