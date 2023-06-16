"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";

export type LearnToEarnItem = {
  icon: string;
  title: string;
  description: string;
};

interface Props {
  items: Array<LearnToEarnItem>;
}

export default function LearnToEarn({ items }: Props) {
  return (
    <Flex w="full" direction="column" align="center" mt="340px">
      <Flex w="full" maxW="1200px" direction="column" zIndex={1}>
        <VStack w="full" spacing="24px" align="center" textAlign="center">
          <Image
            key={"image"}
            width={750}
            height={192}
            alt="Play to earn"
            src="/desktop/LearnToEarn.png"
            priority
          />
          <Text
            key={"text"}
            fontWeight="900"
            fontSize="32px"
            lineHeight="40px"
            letterSpacing={0.5}
          >
            Gặt hái niềm vui, đón nhận thành quả
          </Text>
        </VStack>
        <Flex mt="82px" w="full" justify="center" wrap="wrap">
          {items.map((item, index) => (
            <Item key={index} index={index} {...item} />
          ))}
        </Flex>
      </Flex>

      <Box w="full" h="600px" position="relative" mt="-150px">
        <Image src="/Cloud.png" alt="cloud" fill priority />
      </Box>
      <Flex w="full" direction="column" mt={10}>
        <Flex
          w={{ base: "full", sm: "70%" }}
          bg="brandCyan.100"
          align="center"
          justifyContent="space-between"
          direction={{
            base: "column",
            sm: "row",
          }}
          px={10}
          roundedTopLeft={{ base: "200px", sm: 0 }}
          roundedTopRight={{ base: "200px", sm: "300px" }}
          roundedBottomRight={{ base: 0, sm: "300px" }}
        >
          <Flex
            w={{ base: "full", sm: "50%" }}
            align="center"
            py={{ base: 0, sm: 20 }}
            pt={20}
          >
            <Image
              src="/pexels-photo.jpeg"
              alt="Logo"
              width={500}
              height={500}
            />
          </Flex>
          <Flex
            direction="column"
            w={{ base: "full", sm: "50%" }}
            px={10}
            py={20}
          >
            <Flex
              direction="column"
              justify="space-between"
              align={{ base: "center", sm: "flex-start" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Heading size="md" fontWeight="bold" my={2}>
                Phương pháp và chương trình được Nghiên cứu bài bản
              </Heading>
              <Text color="brandGray.500" mt={2}>
                Học tiếng Anh thông qua các nhiệm vụ, tình huống cụ thể và gần
                gũi với đời sống hằng ngày (Game-based learning & Task-based
                learning)
              </Text>
              <Text color="brandGray.500" mt={2}>
                100% giúp trẻ học vui, và đem lại những hiệu quả vượt trội -
                100% tin cậy bởi phương pháp và chương trình được nghiên cứu và
                phát triển bởi Hệ thống giáo dục Hội Việt Mỹ VUS với kinh
                nghiệm, sự gắn bó và thấu hiểu qua hơn 25 năm đồng hành vững
                bước cùng hàng triệu em nhỏ và gia đình Việt Nam.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={{ base: "full", sm: "70%" }}
          bg="brandPink.100"
          align="center"
          justifyContent="space-between"
          direction={{
            base: "column",
            sm: "row-reverse",
          }}
          ml="auto"
          mt={-10}
          px={10}
          roundedTopLeft={{ base: 0, sm: "300px" }}
          roundedBottomLeft={{ base: "200px", sm: "300px" }}
          roundedBottomRight={{ base: "200px", sm: 0 }}
        >
          <Flex w={{ base: "full", sm: "50%" }} align="center" py={20}>
            <Image
              src="/pexels-photo.jpeg"
              alt="Logo"
              width={500}
              height={500}
            />
          </Flex>
          <Flex
            direction="column"
            w={{ base: "full", sm: "50%" }}
            px={10}
            py={{ base: 0, sm: 20 }}
            pb={20}
          >
            <Flex
              direction="column"
              justify="space-between"
              align={{ base: "center", sm: "flex-start" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Heading size="md" fontWeight="bold" my={2}>
                Ứng dụng Công nghệ hàng đầu đem lại kết quả học tập cao nhất
              </Heading>
              <Text color="brandGray.500" mt={2}>
                Trí tuệ nhân tạo giúp đánh giá phát âm và phản hồi tức thì giúp
                con &quot;nâng trình&quot; phát âm qua từng thử thách
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

interface ItemProps extends LearnToEarnItem {
  index: number;
}
const Item = (props: ItemProps) => {
  const { index, title, description, icon } = props;

  return (
    <Box
      w={`calc((100% - 120px) / 3)`}
      ml={index % 3 === 0 ? 0 : "60px"}
      mb="60px"
    >
      <VStack spacing="52px" align="center">
        <Image width={270} height={259} alt="Logo" src={icon} priority />
        <VStack w="full" spacing="12px" align="center">
          <Text
            fontWeight="900"
            fontSize="24px"
            lineHeight="30px"
            letterSpacing={0.5}
            align="center"
          >
            {title}
          </Text>
          <Text
            color="brandGray.500"
            fontWeight="700"
            fontSize="20px"
            lineHeight="30px"
            letterSpacing={1}
            align="center"
          >
            {description}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
