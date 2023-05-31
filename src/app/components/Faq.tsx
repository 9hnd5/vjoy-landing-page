"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

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

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem colSpan={{ base: 2, sm: 1 }}>
        <Center>
          <Image width={400} height={400} src="/kid.png" priority alt="kid" />
        </Center>
      </GridItem>
      <GridItem colSpan={{ base: 2, sm: 1 }}>
        <VStack>
          <Box w="100%">
            <Accordion allowMultiple>
              <Heading ml={3} mb={3}>
                Câu hỏi thường gặp
              </Heading>
              {result?.map((item: any) => (
                <AccordionItem key={item.id}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <Heading fontSize="md">
                              {item.data.question}
                            </Heading>
                          </Box>
                          {isExpanded ? (
                            <Icon
                              fontSize={20}
                              as={AiFillMinusCircle}
                              color="#FC7006"
                            />
                          ) : (
                            <Icon
                              fontSize={20}
                              as={AiFillPlusCircle}
                              color="#FC7006"
                            />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>{item.data.anwser}</AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Box w="100%">
            <CustomButton />
          </Box>
        </VStack>
      </GridItem>
    </Grid>
  );
}

const CustomButton = () => {
  return (
    <Box
      as="button"
      height="40px"
      width="100%"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px="8px"
      borderRadius="40px"
      fontSize="14px"
      fontWeight="semibold"
      bg="#f5f6f7"
      borderColor="#F9FAFB"
      color="#4b4f56"
      _hover={{ bg: "#ebedf0" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      <Flex justifyContent="space-between" px={2}>
        <Text color="brandPurple.600">Phụ huynh góp ý</Text>
        <Icon as={FaArrowRight} color="brandPurple.600" />
      </Flex>
    </Box>
  );
};
