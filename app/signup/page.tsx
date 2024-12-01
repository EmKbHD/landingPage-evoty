// "use client";

// import { InputGroup } from "../../ui/input-group";

// import {
//   Flex,
//   Box,
//   Input,
//   HStack,
//   InputElement,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   // useColorModeValue,
//   Link,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

// export default function SignUpPage() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       // bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack gap={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"} textAlign={"center"}>
//             Sign up
//           </Heading>
//           <Text fontSize={"lg"} color={"gray.600"}>
//             to enjoy all of our cool features ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           // bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spaceX={4}>
//             <HStack>
//               <Box>
//                 <Box id="firstName">
//                   <label>First Name</label>
//                   <Input id="fname" type="text" />
//                 </Box>
//               </Box>
//               <Box>
//                 <Box id="lastName">
//                   <label>Last Name</label>
//                   <Input id="lname" type="text" />
//                 </Box>
//               </Box>
//             </HStack>
//             <Box id="email">
//               <label>Email address</label>
//               <Input type="email" />
//             </Box>
//             <Box id="password">
//               <label>Password</label>
//               <InputGroup>
//                 <Input type={showPassword ? "text" : "password"} />
//               </InputGroup>
//               <InputGroup>
//                 <InputElement h={"full"}>
//                   <Button
//                     variant={"ghost"}
//                     onClick={() =>
//                       setShowPassword((showPassword) => !showPassword)
//                     }
//                   >
//                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                   </Button>
//                 </InputElement>
//               </InputGroup>
//             </Box>
//             <Stack gap={10} pt={2}>
//               <Button
//                 // loadingText="Submitting"
//                 size="lg"
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//               >
//                 Sign up
//               </Button>
//             </Stack>
//             <Stack pt={6}>
//               <Text textAlign={"center"}>
//                 Already a user? <Link color={"blue.400"}>Login</Link>
//               </Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }
