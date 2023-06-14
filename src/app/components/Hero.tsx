"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Box w="full" h="calc(100vh - 60px)" position="relative">
      <Image src="/desktop/Hero.png" alt="Hero" fill priority quality={100} />
    </Box>
  );
}
