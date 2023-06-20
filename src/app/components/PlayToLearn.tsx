"use client";

import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export type PlayToLearnItem = {
  img: string;
  bg: string;
  icon: string;
  title: Array<{ content: string; color?: string }>;
  description: string;
};

interface Props {
  items: Array<PlayToLearnItem>;
}

export default function PlayToLearn({ items }: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const folder = isMobile ? "mobile" : "desktop";
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    draggable: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    centerPadding: "230px",
    speed: 500,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setActiveIndex(newIndex),
  };
  return (
    <Flex w="full" justify="space-around" mt="140px" position="relative" zIndex={3}>
      <Box
        w={{ base: "119px", md: "324px"}}
        h={{ base: "230px", md: "437px"}}
        bgColor="transparent"
        bgImg={`/${folder}/Planet1.png`}
        bgSize={{ base: "119px 230px", md: "324px 437px"}}
        position="absolute"
        left="0"
        top={{ base: "-100", md: "0" }}
      />
      <Flex w="full" direction="column" px={{ base: "24px", sm: 0 }} zIndex={2}>
        <VStack w="full" spacing="24px" align="center" textAlign="center">
          <Image
            key={1}
            width={isMobile ? 342 : 689}
            height={isMobile ? 100 : 251}
            alt="Play to learn"
            src={`/${folder}/PlayToLearn3x.png`}
            priority
          />
          <Text
            key={2}
            color={"brandGray.900"}
            fontWeight="900"
            fontSize={{ base: "24px", md: "32px" }}
            lineHeight={{ base: "30px", md: "40px" }}
            letterSpacing={0.5}
            px={{ base: "24px", md: 0 }}
          >
            {`Con vui học${isMobile ? " và" : ","} sáng tạo không giới hạn`}
          </Text>
        </VStack>
        {isMobile && (
          <Box w="full" mt="64px">
            {items.map((item, index) => (
              <Item key={index} index={index} isMobile={isMobile} {...item} />
            ))}
          </Box>
        )}

        {!isMobile && (
          <Box as={Slider} {...settings} mt="102px">
            {items.map((item, index) => (
              <Item
                key={index}
                index={index}
                isMobile={isMobile}
                activeIndex={activeIndex}
                {...item}
              />
            ))}
          </Box>
        )}
      </Flex>
    </Flex>
  );
}

interface ItemProps extends PlayToLearnItem {
  index: number;
  activeIndex?: number;
  isMobile: boolean;
}
const Item = (props: ItemProps) => {
  const { index, activeIndex, isMobile, bg, img, title, description, icon } =
    props;
  const isActive = index === activeIndex;
  const folder = isMobile ? "mobile" : "desktop";

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      as={Box}
      p={{ base: "24px", md: 10 }}
      spacing={10}
      mb={{ base: "24px", md: "52px" }}
      align="center"
      h={{ md: "545px" }}
      transform={{ md: isActive ? "scale(1)" : "scale(0.85)" }}
      transition={{ md: "all 0.3s" }}
      bg={bg}
      rounded="60px"
      overflow="hidden"
    >
      <VStack
        maxW={{ md: "55%" }}
        spacing={{ base: "16px", md: "32px" }}
        pl={{ md: "20px" }}
        align={{ base: "center", md: "flex-start" }}
      >
        <Image
          key={1}
          width={isMobile ? 80 : 108}
          height={isMobile ? 80 : 108}
          alt="Logo"
          src={`/${folder}/${icon}`}
          priority
        />
        <VStack key={2} spacing="16px" align="flex-start">
          <Text
            key={1}
            fontWeight="900"
            fontSize={{ base: "24px", md: "40px" }}
            lineHeight={{ base: "30px", md: "50px" }}
            letterSpacing={0.5}
            textAlign={{ base: "center", md: "left" }}
          >
            {title.map((item, index) => (
              <Box
                as="span"
                key={index}
                color={item.color ? item.color : "brandGray.900"}
              >
                {item.content}
              </Box>
            ))}
          </Text>
          <Text
            key={2}
            color="brandGray.500"
            fontWeight="700"
            fontSize={{ base: "16px", md: "20px" }}
            lineHeight={{ base: "24px", md: "30px" }}
            letterSpacing={1}
            textAlign={{ base: "center", md: "left" }}
          >
            {description}
          </Text>
        </VStack>
      </VStack>
      <AspectRatio
        w={{ base: "full", md: "374px" }}
        ratio={1122 / 1395}
        position="relative"
      >
        <Image
          src={img}
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100vw"
          priority
        />
      </AspectRatio>
    </Stack>
  );
};
