"use client";

import { useState } from "react";
import { NavbarMenu } from "../db/data";
import { HiBars3 } from "react-icons/hi2";
// import NavbarMobile from "./NavbarMobile";
import Link from "next/link";
import { Box, Flex, Image, Container } from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Container
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        mx={"auto"}
        border={"1px solid #E5E5E5"}
        // padding={["1rem", "2rem", "4rem", "5rem", "6rem"]}
      >
        {/* logo area */}
        <Flex border={"1px solid #E5E5E5"}>
          <Link href="/">
            <Image src={"/assets/eVoty.svg"} alt="eVoty Logo" height={128} />
          </Link>
        </Flex>
        {/* menu items area */}
        <Box border={"1px solid #E5E5E5"}>
          <Flex as="ul" listStyle={"none"}>
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a href="{item.link}">{item.title}</a>
                </li>
              );
            })}
          </Flex>
        </Box>
        {/* CTA button area for sign up or login */}
        <Box border={"1px solid #E5E5E5"}>
          <button type="button">Sign up</button>
          <button type="button">Log in</button>
        </Box>
        {/* mobile hamburger menu area */}
        <Box display={"none"} onClick={() => setIsOpen(!isOpen)}>
          <HiBars3 />
        </Box>
      </Container>
      {/* mobile sidebar menu section */}
      {/* <NavbarMobile open={isOpen} /> */}
    </Box>
  );
};

export default Navbar;
