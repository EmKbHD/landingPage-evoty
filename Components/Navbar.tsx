"use client";

import { useState } from "react";
import { NavbarMenu } from "../db/data";
import { HiBars3 } from "react-icons/hi2";
import NavbarMobile from "./NavbarMobile";
import { Box, Button, Flex, Image, Container, Link } from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Container
        display="flex"
        justifyContent="space-between"
        w="dvw"
        mx="auto"
        px={["1rem", "2rem", "4rem", "5rem", "6rem"]}
        py="1.25rem"
      >
        {/* logo area */}
        <Flex justify="center" gap="0.5rem">
          <Link href="/">
            <Image src="/assets/eVoty.svg" alt="eVoty Logo" maxHeight="4rem" />
          </Link>
        </Flex>
        {/* menu items area */}
        <Box
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
            gap={{ base: "0.75rem", md: "1.5rem", lg: "3.5rem" }}
          >
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    fontWeight="semibold"
                    color="gray.600"
                    _hover={{ color: "red.500" }}
                    fontSize={{ md: "1.125rem" }}
                    lineHeight="1.75rem"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </Flex>
        </Box>
        {/* CTA button area for sign up or login */}
        <Flex fontWeight="semibold" justifyContent="center" px="1rem">
          <Link href="/signup">
            <Button
              px="1rem"
              mr="0.75rem"
              bg="secondary"
              _hover={{ bg: "secondary/90" }}
              rounded="md"
              color="white"
            >
              Sign up
            </Button>
          </Link>

          <Link href="/signin">
            <Button
              px="1rem"
              bg="primary"
              _hover={{ bg: "primary/90" }}
              rounded="md"
              color="white"
            >
              Log in
            </Button>
          </Link>
        </Flex>
        {/* mobile hamburger menu area */}
        <Flex
          justifyContent="center"
          align="center"
          w="2.5rem"
          md={{ display: "none" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiBars3 size="2rem" color="brandPrimary" />
        </Flex>
      </Container>
      {/* mobile sidebar menu section */}
      <NavbarMobile open={isOpen} />
    </Box>
  );
};

export default Navbar;
