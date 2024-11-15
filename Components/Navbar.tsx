"use client";

import { useState } from "react";
import { NavbarMenu } from "../db/data";
import { HiBars3 } from "react-icons/hi2";
import NavbarMobile from "./NavbarMobile";
import { Box, Flex, Image, Container, Link, Text } from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Container
        display="flex"
        justifyContent="space-between"
        w="dvw"
        mx="auto"
        border={"1px solid #E5E5E5"}
        px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
        py="1.25rem"
      >
        {/* logo area */}
        <Flex border={"1px solid #E5E5E5"} justify="center" gap="0.5rem">
          <Link href="/">
            <Image src="/assets/eVoty.svg" alt="eVoty Logo" maxHeight="4rem" />
          </Link>
        </Flex>
        {/* menu items area */}
        <Box
          border={"1px solid #E5E5E5"}
          // display={{ base: "none", md: "block" }}
          hideBelow="md"
          md={{ display: "flex", justifyContent: "center", gap: "1rem" }}
        >
          <Flex
            as="ul"
            px="1rem"
            justifyContent="center"
            align="center"
            width="full"
            listStyle="none"
            gap={{ base: "0.75rem", md: "1.5rem", lg: "2rem" }}
          >
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    fontWeight="semibold"
                    color="gray.600"
                    _hover={{ color: "red.500" }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </Flex>
        </Box>
        {/* CTA button area for sign up or login */}
        <Flex
          border={"1px solid #E5E5E5"}
          fontWeight="semibold"
          justifyContent="center"
          // gap="1rem"
          px="1rem"
        >
          <Link href="#" fontWeight="medium" color="gray.600">
            <Text
              as="button"
              px="1rem"
              py="0.5rem"
              mr="0.75rem"
              bg="secondary"
              rounded="md"
              color="white"
            >
              Sign up
            </Text>
          </Link>

          <Link href="#" fontWeight="medium" color="gray.600">
            <Text
              as="button"
              px="1rem"
              py="0.5rem"
              // mr="0.75rem"
              bg="primary"
              rounded="md"
              color="white"
            >
              Log in
            </Text>
          </Link>
        </Flex>
        {/* mobile hamburger menu area */}
        <Flex
          border={"1px solid #E5E5E5"}
          justifyContent="center"
          align="center"
          w="2.5rem"
          md={{ display: "none" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiBars3 />
        </Flex>
      </Container>
      {/* mobile sidebar menu section */}
      <NavbarMobile open={isOpen} />
    </Box>
  );
};

export default Navbar;
