"use client";

import { Checkbox } from "../../ui/checkbox";
import { Field } from "../../ui/field";

import {
  Center,
  Fieldset,
  Flex,
  Box,
  Image,
  Input,
  Stack,
  Button,
  Text,
  Link,
  VStack,
  // useColorModeValue,
} from "@chakra-ui/react";

import { useFormik } from "formik";

export default function SignInPage() {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // console.log(formik);

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
        <VStack as="form">
          <Fieldset.Root>
            <Stack align={"center"} spaceY={4}>
              <Fieldset.Legend fontSize={"4xl"} color="primary">
                Sign in to your account
              </Fieldset.Legend>
              <Fieldset.HelperText
                fontSize={"lg"}
                color={"gray.600"}
                textAlign={"center"}
              >
                to enjoy all of our cool{" "}
                <Text color={"brandPrimary.800"}>features</Text>
              </Fieldset.HelperText>
            </Stack>
            <Box
              rounded={"lg"}
              // bg={useColorModeValue("white", "gray.700")}
              boxShadow="0 10px 15px 1px rgb(0 0 0 / 0.2)"
              p={8}
              bg="#ffffff"
            >
              <Fieldset.Content>
                <Stack gap={4} color="gray.600">
                  <Field id="email" label="Email address" required>
                    <Input
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      variant="outline"
                      onBlur={handleBlur}
                    />
                  </Field>

                  <Field id="password" label="Password" required>
                    <Input
                      value={values.password}
                      onChange={handleChange}
                      type="password"
                      variant="outline"
                      onBlur={handleBlur}
                    />
                  </Field>

                  <Stack gap={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox color={"gray.500"}>Remember me</Checkbox>
                      <Link
                        color={"brandPrimary.700"}
                        href="#"
                        _hover={{ color: "brandPrimary.800" }}
                      >
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      type="submit"
                      bg={"brandPrimary.800"}
                      color={"white"}
                      _hover={{
                        bg: "brandPrimary.900",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Fieldset.Content>
            </Box>
          </Fieldset.Root>
        </VStack>
      </Stack>
    </Flex>
  );
}
