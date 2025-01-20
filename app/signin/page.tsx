"use client";
import { Center, Flex, Image, Stack, Link } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

export default function SignInPage() {
  return (
    <Flex
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bg="#F7FAFC"
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack gap={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Center>
          <Link href="/">
            <Image src="/assets/eVoty.svg" alt="eVoty Logo" minHeight="4rem" />
          </Link>
        </Center>
        <LoginForm />
      </Stack>
    </Flex>
  );
}
