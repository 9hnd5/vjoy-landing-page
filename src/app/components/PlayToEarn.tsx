"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function PlayToEarn() {
  return (
    <Flex w="full" direction="column" align="center" my={20}>
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
            Gặt hái niềm vui, đón nhận thành quả
          </Heading>
        </Flex>
        <Flex
          justifyContent="space-between"
          direction={{
            base: "column",
            sm: "row",
          }}
          mt={10}
        >
          <Flex w={{ base: "full", sm: "47%" }} direction="column">
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
                Gặt hái niềm vui
              </Heading>
              <Text color="brandGray.500" mt={2}>
                Con hứng khởi chinh phục các thử thách mới, mở khoá các kỹ năng
                và tiềm năng để thu thập đá quý V-Gem. Bằng chính kết quả học
                tập của mình, con có thể dùng V-Gem theo cách riêng của mình:
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "full", sm: "47%" }}
            direction="column"
            mt={{ base: 20, sm: 0 }}
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
                Đón nhận thành quả
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
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
