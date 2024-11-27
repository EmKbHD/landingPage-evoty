"use client";

import { Box, Container, Image, Link, Text } from "@chakra-ui/react";
import { NavbarMenu } from "../db/data";
import Footer_CompanyInfo from "./Footer_CompanyInfo";

const TermsPolicies = [
  {
    id: 1,
    title: "Privacy",
    link: "#",
  },
  {
    id: 2,
    title: "Terms of Use",
    link: "#",
  },
  {
    id: 3,
    title: "FAQ",
    link: "#",
  },
];

const Footer = () => {
  return (
    <Box border="1px solid #E5E5E5">
      <Container>
        {/* company info here */}
        <Box>
          <Box>
            <Box>
              <Image
                src="/assets/eVoty.svg"
                alt="eVoty Logo"
                maxHeight="4rem"
              />
            </Box>

            <Text as="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              numquam distinctio aperiam amet culpa?
            </Text>

            {/* links start here */}
            <Box>
              {/* Important links start here */}
              <Box>
                <Text as="h2">Important Links</Text>
                <Box as="ul">
                  {NavbarMenu.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </Box>
              </Box>
              {/* Terms and Policies  */}
              <Box>
                <Text as="h2">Resources</Text>
                <Box as="ul">
                  {TermsPolicies.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </Box>
              </Box>
              {/* Socials link start here */}
              <Footer_CompanyInfo />
            </Box>
          </Box>
          {/* copyright area  */}
          <Box>
            <Box>
              <Text as="span">
                &copy; Copyright 2024 &nbsp; Afritic Group. All rights reserved.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
