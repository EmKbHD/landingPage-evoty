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
  Link,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { PasswordInput } from "@/ui/password-input";

export default function SignUpPage() {
  // Initial form values for input fields
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  // Form validation schema
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(2, "First name must be at least 2 characters")
      .required("First name is required"),
    lastname: Yup.string()
      .min(2, "Last name must be at least 2 characters")
      .required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm password is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="#F7FAFC">
      <Stack gap={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <form onSubmit={formik.handleSubmit}>
          <Center>
            <Link href="/">
              <Image
                src="/assets/eVoty.svg"
                alt="eVoty Logo"
                minHeight="4rem"
              />
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
                    <Field label="First Name">
                      <Input
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        id="firstname"
                        // name="firstname"
                        type="text"
                        border={formik.errors.firstname ? "1px solid red" : ""}
                      />
                      {formik.touched.firstname && formik.errors.firstname && (
                        <Text color="red.500" fontSize="sm">
                          {formik.errors.firstname}
                        </Text>
                      )}
                    </Field>
                    <Field label="Last Name">
                      <Input
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        // name="lastname"
                        id="lastname"
                        type="text"
                        border={formik.errors.lastname ? "1px solid red" : ""}
                      />
                      {formik.touched.lastname && formik.errors.lastname && (
                        <Text color="red.500" fontSize="sm">
                          {formik.errors.lastname}
                        </Text>
                      )}
                    </Field>
                  </HStack>
                  {/* email address field starts here */}
                  <Field
                    label="Email address"
                    helperText="We'll never share your email."
                  >
                    <Input
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      id="email"
                      name="email"
                      type="email"
                      border={formik.errors.email ? "1px solid red" : ""}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <Text color="red.500" fontSize="sm">
                        {formik.errors.email}
                      </Text>
                    )}
                  </Field>
                  {/* password fields start here */}
                  <Field
                    id="password"
                    label="Password"
                    display={"flex"}
                    border={
                      formik.errors.password
                        ? "1px solid red"
                        : "1px solid #E5E7EB"
                    }
                  >
                    <PasswordInput
                      // name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <Text color="red.500" fontSize="sm">
                        {formik.errors.password}
                      </Text>
                    )}
                    {/* <PasswordStrengthMeter
                      value={parseInt(formik.values.password)}
                    /> */}
                  </Field>
                  <Field
                    id="confirmpassword"
                    label="Confirm Password"
                    display={"flex"}
                    border={
                      formik.errors.password
                        ? "1px solid red"
                        : "1px solid #E5E7EB"
                    }
                  >
                    <PasswordInput
                      // name="confirm password"
                      value={formik.values.confirmpassword}
                      onChange={formik.handleChange}
                      // onBlur={handleBlur}
                    />
                    {formik.touched.confirmpassword &&
                      formik.errors.confirmpassword && (
                        <Text color="red.500" fontSize="sm">
                          {formik.errors.confirmpassword}
                        </Text>
                      )}
                  </Field>
                  <Stack gap={10} pt={2}>
                    <Button
                      type="submit"
                      size="lg"
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
                        href="/signin"
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
        </form>
      </Stack>
    </Flex>
  );
}
