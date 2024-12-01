// "use client";

// import { Checkbox } from "../../ui/checkbox";

// import {
//   Flex,
//   Box,
//   Input,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   // useColorModeValue,
// } from "@chakra-ui/react";

// export default function SignInPage() {
//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       // bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack gap={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"}>Sign in to your account</Heading>
//           <Text fontSize={"lg"} color={"gray.600"}>
//             to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           // bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack gap={4}>
//             <form id="email">
//               <label>Email address</label>
//               <Input type="email" />
//             </form>
//             <form id="password">
//               <label>Password</label>
//               <Input type="password" />
//             </form>
//             <Stack gap={10}>
//               <Stack
//                 direction={{ base: "column", sm: "row" }}
//                 align={"start"}
//                 justify={"space-between"}
//               >
//                 <Checkbox>Remember me</Checkbox>
//                 <Text color={"blue.400"}>Forgot password?</Text>
//               </Stack>
//               <Button
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//               >
//                 Sign in
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }
