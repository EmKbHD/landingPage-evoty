"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
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
    <Box
      bgGradient="to-r"
      gradientFrom="#00001B"
      gradientTo="#010102"
      borderTopRadius="2xl"
    >
      <Container mx="auto" px={["1rem", "2rem", "4rem", "5rem", "6rem"]} py={8}>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr 2fr)",
            md: "repeat(2, 1fr 3fr)",
          }}
          gap={{ base: 2, md: 4 }}
          py={5}
          borderTop={2}
          borderColor="gray.300/10"
          color="white"
        >
          {/* Company info here */}
          <GridItem
            width={["100px", "150px", "200px"]}
            py={8}
            px={{ base: 2, md: 4 }}
            spaceY={4}
          >
            <Box>
              <Image
                src="/assets/eVoty.svg"
                alt="eVoty Logo"
                maxHeight="4rem"
                bg="white"
                rounded="lg"
                px={2}
              />
            </Box>

            <Text
              as="p"
              color="gray.300"
              textAlign={{ base: "justify", md: "left" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              numquam distinctio ?
            </Text>
          </GridItem>

          {/* Links start here */}
          <GridItem colSpan={3}>
            <Grid
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              ml={{ base: 4, md: 14 }}
            >
              {/* Important links start here */}
              <GridItem py={8} px={4}>
                <Text as="h2" fontSize="lg" fontWeight="bold" mb={4}>
                  Important Links
                </Text>
                <Box as="ul" display="flex" flexDir="column" gap={3}>
                  {NavbarMenu.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.link}
                          _hover={{ color: "brandSecondary.500" }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </Box>
              </GridItem>
              {/* Terms and Policies  */}
              <GridItem py={8} px={4}>
                <Text as="h2" fontSize="lg" fontWeight="bold" mb={4}>
                  Resources
                </Text>
                <Box as="ul" display="flex" flexDir="column" gap={3}>
                  {TermsPolicies.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.link}
                          _hover={{ color: "brandSecondary.500" }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </Box>
              </GridItem>
              {/* Socials link start here */}
              <GridItem py={8} px={4}>
                <Footer_CompanyInfo />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        {/* copyright area  */}
        <Box
          borderTop="1px solid #A0A0A0"
          w="full"
          pt={8}
          px={4}
          textAlign="center"
        >
          <Text as="span" fontSize="sm" color="gray.300">
            &copy; Copyright 2024 &nbsp; Afritic Group. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
