"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { nunito } from "../fonts";

export const revalidate = 0;

type Props = {
  result:
    | {
        id: string;
        data: DocumentData;
      }[]
    | null;
};
export default function Faq(props: Props) {
  const { result } = props;
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const folder = isMobile ? "mobile" : "desktop";

  return (
    <Flex id="faq" direction="column">
      <Flex w="full" direction={{ base: "column-reverse", md: "row" }}>
        <Flex
          w={{ base: "443.4px", md: "50%" }}
          justify="space-around"
          align="center"
        >
          <AspectRatio
            w={{ base: "full", md: "70%" }}
            ratio={1617 / 2015}
            position="relative"
          >
            <Image src="/FAQ.png" alt="faq" fill priority sizes="50vw" />
          </AspectRatio>
        </Flex>
        <VStack
          w={{ base: "full", md: "50%" }}
          spacing={{ base: "24px", md: "32px" }}
          padding={{ md: "27px" }}
          mb={{ base: "30px", md: 0 }}
        >
          <Box w="100%" p={{ base: "24px", md: "34px" }} pb={0}>
            <Accordion allowToggle>
              <Text
                fontWeight="900"
                fontSize={{ base: "32px", md: "40px" }}
                lineHeight={{ base: "40px", md: "50px" }}
                letterSpacing={0.5}
                mb={{ base: "24px", md: "32px" }}
              >
                Câu hỏi thường gặp
              </Text>
              {result?.map((item: any, index) => (
                <AccordionItem
                  key={item.id}
                  borderTopWidth={0}
                  borderBottomWidth={
                    index === result.length - 1 ? "0 !important" : "1px"
                  }
                  py={{ base: "24px", md: "32px" }}
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          p={0}
                          _active={{ bg: "white" }}
                          _hover={{ bg: "white" }}
                        >
                          <Box as="span" flex="1" textAlign="left">
                            <Heading
                              fontWeight="900"
                              fontSize={{ base: "16px", md: "20px" }}
                              lineHeight={{ base: "20px", md: "25px" }}
                              letterSpacing={0.5}
                              className={nunito.className}
                            >
                              {item.data.question}
                            </Heading>
                          </Box>
                          {isExpanded ? (
                            <Box
                              key={1}
                              w="28px"
                              h="28px"
                              bgColor="transparent"
                              bgImg="/icons/SubtractCircle.png"
                              bgSize="28px 28px"
                            />
                          ) : (
                            <Box
                              key={1}
                              w="28px"
                              h="28px"
                              bgColor="transparent"
                              bgImg="/icons/AddCircle.png"
                              bgSize="28px 28px"
                            />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        p={0}
                        pt={{ base: "8px", md: "16px" }}
                        fontWeight="700"
                        fontSize={{ base: "16px", md: "20px" }}
                        lineHeight={{ base: "20px", md: "30px" }}
                        letterSpacing={1}
                        color="brandGray.500"
                      >
                        {item.data.anwser}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Box w="100%" px={{ base: "8px", md: 0 }}>
            <CustomButton />
          </Box>
        </VStack>
      </Flex>
      <AspectRatio
        w="full"
        ratio={isMobile ? 1170 / 896 : 1440 / 478}
        position="relative"
        mt={{ base: "-232px", md: "-72px" }}
        zIndex={1}
      >
        <Image
          src={`/${isMobile ? "mobile" : "desktop"}/FooterCloud.png`}
          alt="faq"
          fill
          priority
        />
      </AspectRatio>
    </Flex>
  );
}

const CustomButton = () => {
  return (
    <Box
      as="button"
      width="full"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px={{ base: "16px", md: "32px" }}
      py={{ base: "12px", md: "23.5px" }}
      borderRadius="40px"
      fontWeight="900"
      fontSize="20px"
      lineHeight="25px"
      letterSpacing={0.5}
      bg="brandGray.50"
      borderColor="white"
      color="#4b4f56"
    >
      <Flex justifyContent="space-between">
        <Text color="brandPurple.600">Phụ huynh góp ý</Text>
        <Box
          key={1}
          w="28px"
          h="28px"
          bgColor="transparent"
          bgImg="/icons/ArrowRight.png"
          bgSize="28px 28px"
        />
      </Flex>
    </Box>
  );
};
