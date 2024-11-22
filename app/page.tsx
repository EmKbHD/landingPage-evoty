import { Box } from "@chakra-ui/react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import WhatIsEvoty from "@/Components/WhatIsEvoty";
import Banners from "@/Components/Banners";

export default function Home() {
  return (
    <Box bg="white" color="black" minHeight="100vh">
      <Navbar />
      <HeroSection />
      <Features />
      <WhatIsEvoty />
      <Banners />
    </Box>
  );
}
