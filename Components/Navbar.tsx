"use client";

import { useState } from "react";
import { NavbarMenu } from "../db/data";
import { HiBars3 } from "react-icons/hi2";
import NavbarMobile from "./NavbarMobile";
import { Box, Flex, Image, Container, Link } from "@chakra-ui/react";
import { Button } from "@/ui/button";

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
            gap={{ base: "0.75rem", lg: "1.5rem" }}
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
          gap="1rem"
          px="1rem"
        >
          <Link href="#" fontWeight="semibold" color="gray.600">
            <Button>Sign up</Button>
          </Link>

          <Link href="#" fontWeight="semibold" color="gray.600">
            <Button>Log in</Button>
          </Link>
        </Flex>
        {/* mobile hamburger menu area */}
        <Box display="none" onClick={() => setIsOpen(!isOpen)}>
          <HiBars3 />
        </Box>
      </Container>
      {/* mobile sidebar menu section */}
      <NavbarMobile open={isOpen} />
    </Box>
  );
};

export default Navbar;
