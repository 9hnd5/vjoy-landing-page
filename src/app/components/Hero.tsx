"use client";

import { Box, Button, Center, Flex, Link, VStack } from "@chakra-ui/react";
import { Link as NextLink } from "@chakra-ui/next-js";
import Image from "next/image";

export default function Hero() {
  return (
    <Flex
      w="full"
      h="calc(100vh - 80px)"
      position="relative"
      justify="space-around"
    >
      <Image src="/desktop/Hero.png" alt="Hero" fill priority quality={100} />
      <VStack w="400px" h="152px" mt="474px" spacing="16px" zIndex={1}>
        <Button
          w="100%"
          h="72px"
          pt="17px"
          pb="25px"
          bgColor="transparent"
          bgImg="/buttons/White.png"
          bgSize="cover"
          color="brandPurple.600"
          rounded="40px"
          overflow={"hidden"}
          fontWeight="900"
          fontSize="24px"
          lineHeight="30px"
          letterSpacing="0.5px"
          onClick={() => {
            const signupElement = document.getElementById("signup");
            if (signupElement)
              signupElement.scrollIntoView({ behavior: "smooth" });
          }}
          _hover={{
            bgImg: "/buttons/White_Hover.png",
            bgSize: "cover",
            color: "white",
          }}
          _active={{
            bgImg: "/buttons/White_Click.png",
            bgSize: "cover",
            color: "white",
          }}
        >
          Trải Ngiệm Ngay!
        </Button>
        <Center
          w="100%"
          h="64px"
          pt="13px"
          pb="21px"
          color="white"
          fontWeight="900"
          fontSize="24px"
          lineHeight="30px"
          letterSpacing="0.5px"
        >
          <Link href="#" as={NextLink} _hover={{ textDecoration: "none" }}>
            Tìm hiểu thêm
          </Link>
        </Center>
      </VStack>
    </Flex>
  );
}
