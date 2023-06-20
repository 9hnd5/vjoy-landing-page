"use client";

import {
  AspectRatio,
  Box,
  Flex,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

export type LearnToEarnItem = {
  icon: string;
  title: string;
  description: string;
  descriptionMobile?: string;
};

interface Props {
  items: Array<LearnToEarnItem>;
}

export default function LearnToEarn({ items }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const folder = isMobile ? "mobile" : "desktop";
  return (
    <Flex
      w="full"
      direction="column"
      align="center"
      mt="340px"
      position="relative"
    >
      <Box
        w={{ base: "104px", md: "243px"}}
        h={{ base: "197px", md: "300px"}}
        bgColor="transparent"
        bgImg={`/${folder}/Planet2.png`}
        bgSize={{ base: "104px 197px", md: "243px 300px"}}
        position="absolute"
        left="0"
        top={{ base: "-2070", md: "-180" }}
      />
      <Box
        w={{ base: "201px", md: "462px"}}
        h={{ base: "305px", md: "462px"}}
        bgColor="transparent"
        bgImg={`/${folder}/Planet3.png`}
        bgSize={{ base: "201px 305px", md: "462px 462px"}}
        position="absolute"
        right="0"
        top={{ base: "-300", md: "-550" }}
      />
      <Flex w="full" maxW="1200px" direction="column" zIndex={1}>
        <VStack
          w="full"
          spacing={{ base: "16px", md: "24px" }}
          px={{ base: "24px", md: 0 }}
          align="center"
          textAlign="center"
        >
          <Image
            key={1}
            width={750}
            height={192}
            alt="Play to earn"
            src="/desktop/LearnToEarn.png"
            priority
          />
          <Text
            key={2}
            fontWeight="900"
            fontSize={{ base: "24px", md: "32px" }}
            lineHeight="40px"
            letterSpacing={0.5}
          >
            Gặt hái niềm vui, đón nhận thành quả
          </Text>
          <Text
            key={3}
            color={"brandGray.500"}
            fontWeight="700"
            fontSize="20px"
            lineHeight="30px"
            letterSpacing={1}
            display={{ base: "block", md: "none" }}
          >
            Con hứng khởi chinh phục các thử thách mới, mở khoá các kỹ năng và
            tiềm năng để thu thập đá quý V-Gem. Bằng chính kết quả học tập của
            mình, con có thể dùng V-Gem theo cách riêng của mình:
          </Text>
        </VStack>
        <Flex mt="82px" w="full" justify="center" wrap="wrap">
          {items.map((item, index) => (
            <Item key={index} index={index} {...item} />
          ))}
        </Flex>
      </Flex>

      <AspectRatio
        w="full"
        ratio={2.58}
        position="relative"
        mt={{ base: "-70px", md: "-150px" }}
      >
        <Image src="/Cloud.png" alt="cloud" fill priority />
      </AspectRatio>

      <Box w="full" position="relative" zIndex={1}>
        <AspectRatio
          w="full"
          ratio={{ base: 1170 / 3120, md: 4125 / 2115 }}
          position="relative"
        >
          <Image
            src={`/${folder}/Vector280.png`}
            alt="Phương pháp và chương trình bài bản"
            fill
            priority
          />
        </AspectRatio>
        <Flex
          w="full"
          align="center"
          direction={{
            base: "column",
            sm: "row",
          }}
          position="absolute"
          left={0}
          top={0}
          zIndex={1}
        >
          <Box w={{ base: "full", sm: "50%" }}>
            <AspectRatio
              w={{ base: "90%", md: "75%" }}
              ratio={{ base: 1099 / 1251, md: 1677 / 1964 }}
              ml={{ base: 0, md: "30px" }}
              position="relative"
            >
              <Image
                src={`/${folder}/Illustration1.png`}
                alt="Phương pháp và chương trình bài bản"
                fill
                priority
              />
            </AspectRatio>
          </Box>
          <VStack
            w={{ base: "full", sm: "50%" }}
            spacing="24px"
            align="flex-start"
            mt={{ base: "100px", md: 0 }}
            pl={{ base: "24px", md: "73px" }}
            pr={{ base: "24px", md: "150px" }}
          >
            <Text
              key={1}
              fontWeight="900"
              fontSize={{ base: "32px", md: "40px" }}
              lineHeight={{ base: "40px", md: "50px" }}
              letterSpacing={0.5}
              color="brandGray.900"
            >
              <Box as="span">Phương pháp và chương trình được</Box>
              <Box as="span" color="brandCyan.600" display={"block"}>
                Nghiên cứu bài bản
              </Box>
            </Text>
            <Text
              key={2}
              color="brandGray.500"
              fontWeight="700"
              fontSize="20px"
              lineHeight="30px"
              letterSpacing={1}
            >
              Học tiếng Anh thông qua các nhiệm vụ, tình huống cụ thể và gần gũi
              với đời sống hằng ngày (Game-based learning & Task-based learning)
            </Text>
            <Text
              key={3}
              color="brandGray.500"
              fontWeight="700"
              fontSize="20px"
              lineHeight="30px"
              letterSpacing={1}
            >
              <Box as="span">{`100% giúp trẻ học vui, và đem lại những hiệu quả vượt trội - 100%
              tin cậy`}</Box>
              <Box as="span" display={{ base: "inline", md: "none" }}>
                {" bởi phương pháp"}
              </Box>
            </Text>
          </VStack>
        </Flex>
      </Box>

      <Box w="full" position="relative" mt={{ base: 0, md: "-30px" }}>
        <AspectRatio
          w="full"
          ratio={{ base: 1170 / 2601, md: 4125 / 3010 }}
          position="relative"
        >
          <Image
            src={`/${folder}/Vector281.png`}
            alt="Ứng dụng công nghệ hàng đầu"
            fill
            priority
          />
        </AspectRatio>
        <Flex
          w="full"
          align="center"
          direction={{
            base: "column-reverse",
            sm: "row",
          }}
          position="absolute"
          left={0}
          top={0}
          zIndex={1}
        >
          <VStack
            w={{ base: "full", sm: "50%" }}
            spacing="24px"
            align="flex-start"
            pl={{ base: "24px", md: "200px" }}
            pr={{ base: "24px", md: 0 }}
            pt={{ base: "60px", md: "150px" }}
          >
            <Text
              key={1}
              fontWeight="900"
              fontSize={{ base: "32px", md: "40px" }}
              lineHeight={{ base: "40px", md: "50px" }}
              letterSpacing={0.5}
              color="brandGray.900"
            >
              <Box as="span">{"Ứng dụng "}</Box>
              <Box as="span" color="brandPink.600">
                {"Công nghệ hàng đầu "}
              </Box>
              <Box as="span">{"đem lại kết quả học tập cao nhất"}</Box>
            </Text>
            <Text
              key={2}
              color="brandGray.500"
              fontWeight="700"
              fontSize="20px"
              lineHeight="30px"
              letterSpacing={1}
            >
              {`Trí tuệ nhân tạo giúp đánh giá phát âm và phản hồi tức thì giúp
              con "nâng trình" phát âm qua từng thử thách`}
            </Text>
          </VStack>
          <Box w={{ base: "full", sm: "50%" }}>
            <AspectRatio
              w={{ base: "full", md: "75%" }}
              ratio={1.18}
              ml="auto"
              mt={{ base: "100px", md: 0 }}
              mr="50px"
              position="relative"
            >
              <Image
                src={`/${folder}/Illustration2.png`}
                alt="Ứng dụng công nghệ hàng đầu"
                fill
                priority
              />
            </AspectRatio>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

interface ItemProps extends LearnToEarnItem {
  index: number;
}
const Item = (props: ItemProps) => {
  const { index, title, description, descriptionMobile, icon } = props;

  return (
    <Box
      w={{ base: "full", md: `calc((100% - 120px) / 3)` }}
      ml={{ base: 0, md: index % 3 === 0 ? 0 : "60px" }}
      px={{ base: "24px", md: 0 }}
      mb="60px"
    >
      <VStack
        spacing="52px"
        align="center"
        direction={{ base: "column-reverse", md: "column" }}
      >
        <Image
          key={1}
          width={270}
          height={259}
          alt="Logo"
          src={icon}
          priority
        />
        <VStack key={2} w="full" spacing="12px" align="center">
          <Text
            key={1}
            fontWeight="900"
            fontSize="24px"
            lineHeight="30px"
            letterSpacing={0.5}
            align="center"
          >
            {title}
          </Text>
          <Text
            key={2}
            color="brandGray.500"
            fontWeight="700"
            fontSize="20px"
            lineHeight="30px"
            letterSpacing={1}
            align="center"
          >
            <Box as="span">{description}</Box>
            <Box as="span" display={{ base: "inline", md: "none" }}>
              {descriptionMobile}
            </Box>
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
