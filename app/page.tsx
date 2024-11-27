import { Box } from "@chakra-ui/react";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import Features from "@/Components/Features";
import WhatIsEvoty from "@/Components/WhatIsEvoty";
import Banners from "@/Components/Banners";
import Pricing from "@/Components/Pricing";
import VotePool from "@/Components/VotePool";
import Testimonials from "@/Components/Testimonials";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <Box bg="white" color="black" minHeight="100vh">
      <Navbar />
      <HeroSection />
      <Features />
      <WhatIsEvoty />
      <Banners />
      <Pricing />
      <VotePool />
      <Testimonials />
      <Footer />
    </Box>
  );
}
