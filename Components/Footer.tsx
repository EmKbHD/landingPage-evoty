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
      gradientFrom="brandPrimary.800"
      gradientTo="brandPrimary.900"
      borderTopRadius="2xl"
    >
      <Container mx="auto" px={["1rem", "2rem", "4rem", "5rem", "6rem"]} py={8}>
        <Grid
          border="1px solid #E5E5E5"
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
            border="1px solid #E5E5E5"
            minW={{ base: "155px", md: "200px" }}
            py={8}
            px={4}
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
              color="white"
              textAlign={{ base: "justify", md: "left" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              numquam distinctio ?
            </Text>
          </GridItem>

          {/* Links start here */}
          <GridItem colSpan={3}>
            <Grid
              border="1px solid #E5E5E5"
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
            >
              {/* Important links start here */}
              <GridItem border="1px solid #E5E5E5" py={8} px={4}>
                <Text as="h2" fontSize="lg" fontWeight="bold" mb={4}>
                  Important Links
                </Text>
                <Box as="ul" display="flex" flexDir="column" gap={3}>
                  {NavbarMenu.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </Box>
              </GridItem>
              {/* Terms and Policies  */}
              <GridItem border="1px solid #E5E5E5" py={8} px={4}>
                <Text as="h2" fontSize="lg" fontWeight="bold" mb={4}>
                  Resources
                </Text>
                <Box as="ul" display="flex" flexDir="column" gap={3}>
                  {TermsPolicies.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </Box>
              </GridItem>
              {/* Socials link start here */}
              <GridItem border="1px solid #E5E5E5" py={8} px={4}>
                <Footer_CompanyInfo />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        {/* copyright area  */}
        <Box border="1px solid #E5E5E5" w="full" py={8} px={4}>
          <Box border="1px solid #E5E5E5" textAlign="center">
            <Text as="span" color="white">
              &copy; Copyright 2024 &nbsp; Afritic Group. All rights reserved.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
