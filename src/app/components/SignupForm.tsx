"use client";
import * as gtag from "@/utils/gtag";
import { Icon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

type FormType = {
  parent: string;
  phone: string;
  location: string;
  expect: string;
};
const defaultValues = {
  parent: "",
  phone: "",
  location: "",
  expect: "",
};
export default function SignupForm() {
  const toast = useToast();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit: onSubmit,
  } = useForm<FormType>({ defaultValues });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) => {
      return axios.post("api/signup", data);
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
    reset(defaultValues, { keepDefaultValues: true });
  };

  return (
    <Box id="signup" w="full" px={{ base: 0, sm: 10 }} py={20}>
      <Box
        w="full"
        h="500px"
        rounded={{ base: 0, sm: "40px" }}
        overflow="hidden"
        pos="relative"
      >
        <Image src="/pexels-photo.jpeg" alt="Logo" fill />
      </Box>
      <Box
        w="calc(100vw - 40px)"
        maxW="md"
        backdropFilter="auto"
        backdropBlur="80px"
        backdropBrightness={1.5}
        ml={{ base: 5, sm: 20 }}
        mt={-80}
        px={8}
        py={12}
        rounded={"40px"}
        shadow={"lg"}
      >
        <VStack spacing={5}>
          <FormControl>
            <Heading fontSize="3xl">
              Ba mẹ ơi! Nhanh tay Đăng ký trải nghiệm cho con nhé!
            </Heading>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.parent}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUserCircle} color="brandGray.400" />
              </InputLeftElement>
              <Input
                placeholder="Họ và tên phụ huynh"
                bg="white"
                color="brandGray.500"
                {...register("parent", { required: "Không được bỏ trống" })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.parent && errors.parent.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.phone}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="brandGray.400" />
              </InputLeftElement>
              <Input
                placeholder="Số điện thoại"
                bg="white"
                color="brandGray.500"
                {...register("phone", { required: "Không được bỏ trống" })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.location}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={HiLocationMarker} color="brandGray.400" />
              </InputLeftElement>
              <Input
                placeholder="Địa chỉ"
                bg="white"
                color="brandGray.500"
                {...register("location", { required: "Không được bỏ trống" })}
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.location && errors.location.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            w="100%"
            bg="brandPurple.600"
            color="white"
            onClick={onSubmit(handleSubmit)}
            isLoading={isLoading}
          >
            Trải Ngiệm Ngay
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
