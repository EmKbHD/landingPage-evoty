"use client";

import { Field } from "../../ui/field";

import {
  Center,
  Flex,
  Fieldset,
  Box,
  Image,
  Input,
  HStack,
  Stack,
  Button,
  Text,
  // useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { PasswordInput } from "@/ui/password-input";

export default function SignUpPage() {
  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg="#F7FAFC"

      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack as="form" gap={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Center>
          <Link href="/">
            <Image src="/assets/eVoty.svg" alt="eVoty Logo" minHeight="4rem" />
          </Link>
        </Center>

        <Fieldset.Root>
          <Stack align={"center"} spaceY={4}>
            <Fieldset.Legend
              fontSize={"4xl"}
              textAlign={"center"}
              color={"primary"}
            >
              Sign up
            </Fieldset.Legend>
            <Fieldset.HelperText fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features
            </Fieldset.HelperText>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow="1px 10px 15px -3px rgb(0 0 0 / 0.1), 1px 0px 6px 1px rgb(0 0 0 / 0.1);"
            p={8}
            bg="#FFFFFF"
          >
            <Fieldset.Content>
              <Stack
                color="gray.600"
                border="1px solid #E5E7EB"
                align={"center"}
              >
                {/* firstname and lastname fields start here */}
                <HStack>
                  <Field label="First Name" required>
                    <Input
                      value={values.firstname}
                      onChange={handleChange}
                      id="firstName"
                      type="text"
                      color="gray.800"
                      onBlur={handleBlur}
                    />
                  </Field>
                  <Field label="Last Name" required>
                    <Input
                      value={values.lastname}
                      onChange={handleChange}
                      id="lastName"
                      type="text"
                      color="gray.800"
                      onBlur={handleBlur}
                    />
                  </Field>
                </HStack>
                {/* email address field starts here */}
                <Field
                  label="Email address"
                  required
                  helperText="We'll never share your email."
                >
                  <Input
                    value={values.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    color="gray.800"
                    onBlur={handleBlur}
                  />
                </Field>
                {/* password fields start here */}
                <Field
                  id="password"
                  label="Password"
                  display={"flex"}
                  required
                  border={"1px solid #E5E7EB"}
                >
                  <PasswordInput
                    value={values.password}
                    onChange={handleChange}
                    color="gray.800"
                    onBlur={handleBlur}
                  />
                </Field>
                <Field
                  id="confirmpassword"
                  label="Confirm Password"
                  display={"flex"}
                  required
                  border={"1px solid #E5E7EB"}
                >
                  <PasswordInput
                    value={values.confirmpassword}
                    onChange={handleChange}
                    color="gray.800"
                    onBlur={handleBlur}
                  />
                </Field>
                <Stack gap={10} pt={2}>
                  <Button
                    // loadingText="Submitting"
                    size="lg"
                    type="submit"
                    bg={"brandPrimary.800"}
                    color={"white"}
                    _hover={{
                      bg: "brandPrimary.900",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text textAlign={"center"}>
                    Already a user?{" "}
                    <Link
                      color={"brandPrimary.800"}
                      _hover={{
                        textDecoration: "underline",
                        color: "brandPrimary.900",
                      }}
                    >
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Fieldset.Content>
          </Box>
        </Fieldset.Root>
      </Stack>
    </Flex>
  );
}
