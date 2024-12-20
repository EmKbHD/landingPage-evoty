"use client";
import { useState } from "react";
import PricingCard from "./PricingCard";
import { planAnnual, planMonthly } from "../db/data";

import { Box, Button, Container, Text, Flex, VStack } from "@chakra-ui/react";

const Pricing: React.FC = () => {
  const [monthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly((monthly) => !monthly);
  };

  // Selection of the plans based on the toggle state
  const plans = monthly ? planMonthly : planAnnual;

  return (
    <Container
      w="full"
      mx="auto"
      px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
      pb={{ base: "2rem", md: "4rem" }}
    >
      <Box spaceY={6}>
        <VStack textAlign="center">
          <Text
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
          >
            Choose The Right Plan for Your Business
          </Text>
          <Text fontSize="lg" color={"gray.600"} textAlign="center">
            Start with 14-day free trial. <br /> No credit card needed. Cancel
            at anytime.
          </Text>
        </VStack>
        <Flex
          fontWeight="semibold"
          justifyContent="center"
          alignItems="center"
          gap={4}
          mb={5}
        >
          <Flex
            bg="gray.200"
            p={1}
            w="max-content"
            rounded="full"
            gap={1}
            position="relative"
          >
            {/* Sliding Background */}
            <Box
              position="absolute"
              top="4px"
              {...(monthly
                ? { w: "calc(30% - 4px)", left: "4px" }
                : { w: "calc(50% - 4px)", left: "-4px" })}
              h="calc(100% - 8px)"
              bg="white"
              rounded="full"
              transition="transform 0.3s ease-in-out"
              transform={
                monthly ? "translateX(0)" : "translateX(calc(100% + 8px))"
              }
            />
            {/* Monthly Button */}
            <Button
              onClick={handleToggle}
              variant="ghost"
              {...(monthly
                ? { bg: "white", color: "black" }
                : { color: "gray.500", bg: "transparent" })}
              px="1rem"
              py={1}
              rounded="full"
            >
              Monthly
            </Button>
            {/* Annual Button */}
            <Button
              onClick={handleToggle}
              variant="ghost"
              {...(!monthly
                ? { bg: "white", color: "black" }
                : { color: "gray.500", bg: "transparent" })}
              rounded="full"
            >
              Annual (save 15%)
            </Button>
          </Flex>
        </Flex>
        <Box
          px={4}
          gridTemplateColumns={{ base: "repeat(1, minmax(0, 1fr))" }}
          display={{ base: "grid", md: "flex" }}
          justifyItems="center"
          gap={{ base: 2, lg: 4 }}
        >
          {plans.map((data) => {
            return (
              <PricingCard
                key={data.category}
                category={data.category}
                price={data.price}
                detail={data.detail}
                features={data.features}
                buttonText={data.buttonText}
                recommended={data.recommended}
              />
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Pricing;
