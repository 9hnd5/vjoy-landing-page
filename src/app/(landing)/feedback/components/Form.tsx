"use client";
import { PhoneIcon, EmailIcon, Icon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocationCity } from "react-icons/md";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function FeedbackForm() {
  return (
    <Card>
      <CardBody>
        <VStack>
          <FormControl>
            <Heading fontSize="4xl">Trải Nghiệm Thử</Heading>
          </FormControl>
          <FormControl>
            <FormLabel>Họ Tên Phụ Huynh</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineUser} color="gray.300" />
              </InputLeftElement>
              <Input />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input type="email" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Số Điện Thoại</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Tỉnh / Thành Phố</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdOutlineLocationCity} color="gray.300" />
              </InputLeftElement>
              <Input />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Mong Muốn</FormLabel>
            <Textarea />
          </FormControl>
          <Button w="100%" colorScheme="red">
            Trải Ngiệm Ngay
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
