"use client";
import { PhoneIcon, EmailIcon, Icon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdOutlineLocationCity } from "react-icons/md";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type FormType = {
  parent: string;
  email?: string;
  phone: string;
  location: string;
  expect: string;
};

export default function FeedbackForm() {
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm<FormType>();

  const handleSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <Card>
      <CardBody>
        <VStack>
          <FormControl>
            <Heading fontSize="4xl">Trải Nghiệm Thử</Heading>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.parent}>
            <FormLabel>Họ Tên Phụ Huynh</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={AiOutlineUser} color="gray.300" />
              </InputLeftElement>
              <Input
                {...register("parent", { required: "Không được bỏ trống" })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.parent && errors.parent.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input type="email" {...register("email")} />
            </InputGroup>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.phone}>
            <FormLabel>Số Điện Thoại</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                {...register("phone", { required: "Không được bỏ trống" })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.location}>
            <FormLabel>Tỉnh / Thành Phố</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdOutlineLocationCity} color="gray.300" />
              </InputLeftElement>
              <Input
                {...register("location", { required: "Không được bỏ trống" })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.location && errors.location.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Mong Muốn</FormLabel>
            <Textarea />
          </FormControl>
          <Button w="100%" colorScheme="red" onClick={onSubmit(handleSubmit)}>
            Trải Ngiệm Ngay
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
