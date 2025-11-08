import {
  Fieldset,
  Box,
  Input,
  Stack,
  Button,
  Text,
  Link,
  // useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "@/Components/ui/field";
import { Checkbox } from "@/Components/ui/checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  // Initial form values for input fields
  const initialValues = {
    email: "",
    password: "",
  };
  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
              <Field id="email" label="Email address">
                <Input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="email"
                  variant="outline"
                  border={formik.errors.email ? "1px solid red" : ""}
                  // onBlur={handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.email}
                  </Text>
                )}
              </Field>

              <Field id="password" label="Password">
                <Input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                  variant="outline"
                  border={formik.errors.password ? "1px solid red" : ""}
                  // onBlur={handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.password}
                  </Text>
                )}
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
    </form>
  );
};

export default LoginForm;
