import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { NavbarMenu } from "../db/data";
import { chakra, Box, Flex, BoxProps, Link } from "@chakra-ui/react";

const NavbarMobile: React.FC<{ open: boolean }> = ({ open }) => {
  // Define a MotionBox component with correct typings
  const MotionBox = chakra(motion.div) as React.FC<BoxProps & MotionProps>;
  return (
    <AnimatePresence mode="wait">
      {open && (
        <MotionBox
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          position="fixed"
          top="6.7rem"
          left={0}
          w="full"
          h="full"
          bg="gray.900/50"
          zIndex={20}
        >
          <Box
            px="0.75rem"
            py="3rem"
            m="1rem"
            rounded="1rem"
            bg="primary"
            color="white"
          >
            <Flex
              as="ul"
              direction="column"
              justify="center"
              align="center"
              gap="1.25rem"
            >
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      py="0.25rem"
                      px="0.75rem"
                      fontWeight="medium"
                      color="white"
                      fontSize="1.25rem"
                      _hover={{ color: "secondary" }}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </Flex>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobile;
