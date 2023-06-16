"use client";

import {
  Box,
  Flex,
  HStack,
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
    <Flex w="full" justify="space-around" mt="140px">
      <Flex w="full" direction="column" px={{ base: 8, sm: 0 }}>
        <VStack w="full" spacing="24px" align="center" textAlign="center">
          <Image
            width={689}
            height={251}
            alt="Play to learn"
            src="/desktop/PlayToLearn3x.png"
            priority
          />
          <Text
            color={"brandGray.900"}
            fontWeight="900"
            fontSize="32px"
            lineHeight="40px"
            letterSpacing={0.5}
          >
            Con vui học, sáng tạo không giới hạn
          </Text>
        </VStack>
        {isMobile &&
          items.map((item, index) => (
            <Item key={index} index={index} isMobile={isMobile} {...item} />
          ))}

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

  return (
    <HStack
      p={10}
      spacing={10}
      mb="52px"
      align="center"
      h="545px"
      transform={isActive ? "scale(1)" : "scale(0.85)"}
      transition="all 0.3s"
      bg={bg}
      rounded="60px"
      overflow="hidden"
    >
      <VStack maxW="55%" spacing="32px" pl="20px" align="flex-start">
        <Image width={108} height={108} alt="Logo" src={icon} priority />
        <VStack spacing="16px" align="flex-start">
          <Text
            fontWeight="900"
            fontSize="40px"
            lineHeight="50px"
            letterSpacing={0.5}
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
            color="brandGray.500"
            fontWeight="700"
            fontSize="20px"
            lineHeight="30px"
            letterSpacing={1}
          >
            {description}
          </Text>
        </VStack>
      </VStack>
      <Box w="374px" h="full" position="relative">
        <Image src={img} alt="Logo" fill priority />
      </Box>
    </HStack>
  );
};
