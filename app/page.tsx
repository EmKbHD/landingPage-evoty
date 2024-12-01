"use client";
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
    <Box
      bg="white"
      color="black"
      minHeight="100vh"
      overflowX="hidden"
      fontFamily="body"
    >
      <Box
        bgImage="url(/assets/bg-red-500.png)"
        bgRepeat="no-repeat"
        bgSize="cover" // Cover 50% of the width in large screen and 100% in md and below
        bgAttachment="fixed"
      >
        <Navbar />
        <HeroSection />
      </Box>
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
