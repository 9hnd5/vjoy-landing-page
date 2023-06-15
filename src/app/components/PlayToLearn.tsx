"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  css,
  useMediaQuery,
} from "@chakra-ui/react";
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

const styles = css({
  "& div.slick-slide": {
    width: "942px",
    height: "545px",
    margin: "0 20px",
  },
});

export default function PlayToLearn({ items }: PlayToLearnProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const settings = {
    // autoplay: true,
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
    <Flex w="full" justify="space-around" mt="140px">
      <Flex w="full" direction="column" px={{ base: 8, sm: 0 }}>
        <VStack w="full" spacing="24px" align="center" textAlign="center">
          <Image
            width={689}
            height={251}
            alt="Play to lear"
            src="/desktop/PlayToLearn3x.png"
            priority
          />
          <Text
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
          <Box as={Slider} {...settings} mt="102px" css={styles}>
            {items.map((_item, index) => (
              <Box key={index} bgColor="blue.400" w="full" h="full" />
              // <Item
              //   key={index}
              //   index={index}
              //   isMobile={isMobile}
              //   activeIndex={activeIndex}
              //   {...item}
              // />
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
  const { index, activeIndex, isMobile, img, title, description } = props;
  const isActive = index === activeIndex;
  return (
    <Flex align="center">
      <Flex
        justifyContent="space-between"
        align="center"
        direction={{
          base: "column-reverse",
          sm: index % 2 === 0 ? "row-reverse" : "row",
        }}
        w="full"
        h={isActive ? "545px" : "462.84px"}
        border="1px solid"
        rounded="60px"
        overflow="hidden"
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
