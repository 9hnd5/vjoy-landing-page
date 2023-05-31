"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

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
  return (
    <Flex w="full" justify="space-around" my={10}>
      <Flex w="full" maxW="1280px" direction="column" px={{ base: 8, sm: 0 }}>
        <Flex
          w="full"
          direction="column"
          justify="space-between"
          align="center"
          textAlign="center"
        >
          <Image width={300} height={300} alt="Logo" src="/logo.svg" priority />
          <Heading size="lg" fontWeight="bold" my={5}>
            Con vui học và sáng tạo trong từng hoạt động
          </Heading>
        </Flex>
        {items.map((item, index) => (
          <Item key={index} index={index} {...item} />
        ))}
      </Flex>
    </Flex>
  );
}

interface ItemProps extends PlayToLearnItem {
  index: number;
}
const Item = (props: ItemProps) => {
  const { index, img, bg, icon, title, description } = props;
  return (
    <Flex
      justifyContent="space-between"
      direction={{
        base: "column-reverse",
        sm: index % 2 === 0 ? "row-reverse" : "row",
      }}
      mt={10}
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
          <Image width={150} height={150} alt="Logo" src="/logo.svg" priority />
          <Heading size="md" fontWeight="bold" my={2}>
            {title}
          </Heading>
          <Text color="brandGray.500" mt={2}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
