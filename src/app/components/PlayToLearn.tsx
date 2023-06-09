"use client";

import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import React, { use } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export type PlayToLearnItem = {
  img: string;
  bg: string;
  icon: string;
  title: string;
  description: string;
};

interface PlayToLearnProps {
  items: Array<PlayToLearnItem>;
}

export default function PlayToLearn({ items }: PlayToLearnProps) {
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
    centerPadding: "200px",
    speed: 500,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setActiveIndex(newIndex),
  };
  return (
    <Flex w="full" justify="space-around" my={10}>
      <Flex w="full" direction="column" px={{ base: 8, sm: 0 }}>
        <Flex
          w="full"
          direction="column"
          justify="space-between"
          align="center"
          textAlign="center"
        >
          <Image width={300} height={300} alt="Logo" src="/logo.svg" priority />
          <Heading size="lg" fontWeight="bold" my={5}>
            Con vui học, sáng tạo trong từng hoạt động
          </Heading>
        </Flex>
        {isMobile &&
          items.map((item, index) => (
            <Item key={index} index={index} isMobile={isMobile} {...item} />
          ))}

        {!isMobile && (
          <Slider {...settings}>
            {items.map((item, index) => (
              <Item
                key={index}
                index={index}
                isMobile={isMobile}
                activeIndex={activeIndex}
                {...item}
              />
            ))}
          </Slider>
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
  const { index, activeIndex, isMobile, img, title, description } = props;
  const isActive = index === activeIndex;
  return (
    <Flex
      mt={10}
      px={isActive ? 6 : 0}
      align="center"
      h={isMobile ? "fit-content" : 500}
    >
      <Flex
        justifyContent="space-between"
        align="center"
        direction={{
          base: "column-reverse",
          sm: index % 2 === 0 ? "row-reverse" : "row",
        }}
        h={isActive ? "full" : "fit-content"}
        border="1px solid"
      >
        <Box w={{ base: "full", sm: "50%" }}>
          <Image src={img} alt="Logo" width={800} height={800} />
        </Box>
        <Flex
          w={{ base: "full", sm: "50%" }}
          direction="column"
          justify="space-around"
          pl={{ base: 0, sm: index % 2 === 0 ? 0 : 10 }}
        >
          <Flex
            direction="column"
            justify="space-between"
            w={{ base: "full", sm: "60%" }}
            align={{ base: "center", sm: "flex-start" }}
            textAlign={{ base: "center", sm: "left" }}
          >
            <Image
              width={150}
              height={150}
              alt="Logo"
              src="/logo.svg"
              priority
            />
            <Heading size="md" fontWeight="bold" my={2}>
              {title}
            </Heading>
            <Text color="brandGray.500" mt={2}>
              {description}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
