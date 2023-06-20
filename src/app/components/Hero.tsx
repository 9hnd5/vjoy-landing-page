"use client";

import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Link,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as NextLink } from "@chakra-ui/next-js";
import Image from "next/image";

export default function Hero() {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const folder = isMobile ? "mobile" : "desktop";
  return (
    <Flex
      w="full"
      direction="column"
      justify="space-around"
      align="center"
      position="relative"
    >
      <AspectRatio
        w="full"
        ratio={{ base: 1170 / 2250, md: 4125 / 2250 }}
        position="relative"
      >
        <Image
          src={`/${folder}/Hero.png`}
          alt="Hero"
          fill
          priority
          quality={100}
        />
      </AspectRatio>
      <VStack
        w={{ base: "full", md: "400px" }}
        h="152px"
        align="center"
        spacing="16px"
        zIndex={1}
        position="absolute"
        bottom={{ base: "56%", md: "14%" }}
      >
        <Button
          key={1}
          w={{ base: "341px", md: "full" }}
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
          key={2}
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
      {isMobile && (
        <>
          <AspectRatio
            w="full"
            ratio={996 / 1185}
            position="relative"
            ml="28px"
            mt="50px"
          >
            <Image
              src={`/mobile/freepik_18190322.png`}
              alt="Hero"
              fill
              priority
              quality={100}
            />
          </AspectRatio>
          <AspectRatio
            w="full"
            ratio={1170 / 285}
            position="absolute"
            bottom="-1px"
            zIndex={1}
          >
            <Image
              src={`/mobile/Rectangle6503.png`}
              alt="Hero"
              fill
              priority
              quality={100}
            />
          </AspectRatio>
        </>
      )}
    </Flex>
  );
}
