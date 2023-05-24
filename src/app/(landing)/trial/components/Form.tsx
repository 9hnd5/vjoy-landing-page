"use client";
import * as gtag from "@/utils/gtag";
import { EmailIcon, Icon, PhoneIcon } from "@chakra-ui/icons";
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
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocationCity } from "react-icons/md";

type FormType = {
  parent: string;
  email?: string;
  phone: string;
  location: string;
  expect: string;
};

export default function FeedbackForm() {
  const toast = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm<FormType>();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) => {
      return axios.post("api/trial", data);
    },
    onSuccess: () => {
      toast({
        title: "Record Created",
        description: "We've created trial",
        status: "success",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
    },
  });

  const handleSubmit: SubmitHandler<FormType> = (data) => {
    gtag.event({
      action: "submit",
      category: "survey",
      label: "trial",
      value: 1,
    });
    mutate(data);
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
          <Button
            w="100%"
            colorScheme="red"
            onClick={onSubmit(handleSubmit)}
            isLoading={isLoading}
          >
            Trải Ngiệm Ngay
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
