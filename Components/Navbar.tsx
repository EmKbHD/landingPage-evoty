"use client";

import { useState } from "react";
import { NavbarMenu } from "../db/data";
import { HiBars3 } from "react-icons/hi2";
// import NavbarMobile from "./NavbarMobile";
import Logo from "../assets/eVoty.svg";
import { Box, Flex, Image, Link } from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Flex
        maxW={"100%"}
        mx={"auto"}
        padding={["1rem", "2rem", "4rem", "5rem", "6rem"]}
      >
        {/* logo area */}
        <Flex>
          <Link href="/">
            <Image src={Logo} alt="eVoty Logo" height={128} />
          </Link>
        </Flex>
        {/* menu items area */}
        <Box>
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
        <Box>
          <button type="button">Sign up</button>
          <button type="button">Log in</button>
        </Box>
        {/* mobile hamburger menu area */}
        <Box display={"none"} onClick={() => setIsOpen(!isOpen)}>
          <HiBars3 />
        </Box>
      </Flex>
      {/* mobile sidebar menu section */}
      {/* <NavbarMobile open={isOpen} /> */}
    </Box>
  );
};

export default Navbar;
