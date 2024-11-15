// import { PlayCircleIcon } from "@heroicons/react/24/solid";
// import HeroImage from "../assets/vote-undraw.svg";
import { motion, MotionProps } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";
import {
  chakra,
  Box,
  BoxProps,
  TextProps,
  HeadingProps,
  ImageProps,
} from "@chakra-ui/react";

const Hero = () => {
  // Define Motion<tag> component with correct typings
  const MotionBox = chakra(motion.div) as React.FC<BoxProps & MotionProps>;
  const MotionHeading = chakra(motion.h1) as React.FC<
    HeadingProps & MotionProps
  >;
  const MotionText = chakra(motion.p) as React.FC<TextProps & MotionProps>;
  const MotionImage = chakra(motion.img) as React.FC<ImageProps & MotionProps>;
  return (
    <section>
      <Box>
        {/* Company information */}
        <Box>
          <Box>
            <MotionHeading
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
            >
              Vote anywhere <br /> <span>you are</span> {""}
            </MotionHeading>
            <MotionText
              variants={SlideRight(1.2)}
              initial="hidden"
              animate="visible"
            >
              <span>Easily Create Elections and Pools</span>

              <ol>
                <li>Simple elections and pool management</li>
                <li>Result in real-time</li>
                <li>Secure and reliable</li>
              </ol>
            </MotionText>
            {/* CTA button here */}
            <MotionBox
              variants={SlideRight(1.5)}
              initial="hidden"
              animate="visible"
            >
              <button>Get started</button>
              <button>
                {/* <PlayCircleIcon /> <span>Watch demo</span> */}
              </button>
            </MotionBox>
          </Box>
        </Box>
        {/* Hero image */}
        <Box>
          <MotionImage
            variants={SlideLeft(1)}
            animate="visible"
            initial={{ opacity: 0, x: 100 }}
            src="/assets/vote-undraw.svg"
            alt="VOTE IMAGE"
          />
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
