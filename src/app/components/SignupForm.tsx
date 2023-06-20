"use client";
import * as gtag from "@/utils/gtag";
import { Icon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
  useToast
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
    <Stack
      id="signup"
      spacing={0}
      width="100%"
      direction={{ base: "column", sm: "row" }}
      height={{ base: 1030, sm: 678 }}
      pos={{ base: "relative" }}
      mt={{ base: -140, sm: -350 }}
      px={{ base: 0, sm: "87px" }}
      py={{ base: 12 }}
      zIndex={{ base: "inherit", sm: 2 }}
    >
      <Box
        roundedLeft={{ base: 0, sm: 40 }}
        overflow={{ base: "unset", sm: "hidden" }}
        position={{ base: "absolute", sm: "relative" }}
      >
        <Image
          src="/HappyFamilyPosing.png"
          alt="Logo"
          priority
          width={600}
          height={678}
        />
      </Box>
      <VStack
        spacing={5}
        background="rgba(255, 255, 255, 0.8)"
        backdropFilter="blur(30px)"
        shadow="0px 4px 60px rgba(75, 28, 174, 0.15)"
        flex={1}
        px={{ base: 6, sm: 6 }}
        py={{ base: 6, sm: 6 }}
        roundedRight={{ base: 40, sm: 40 }}
        roundedLeft={{ base: 40, sm: 0 }}
        top={{ base: 400, sm: 0 }}
        right={{ base: 6, sm: 0 }}
        left={{ base: 6, sm: 0 }}
        pos={{ base: "absolute", sm: "unset" }}
      >
        <FormControl>
          <Box fontSize="4xl" fontWeight={900}>
            Ba mẹ ơi! Nhanh tay{" "}
            <Text display="inline" color="brandPurple.600">
              Đăng ký trải nghiệm
            </Text>{" "}
            cho con nhé!
          </Box>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.parent}>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h="80px">
              <Icon as={FaUserCircle} color="brandGray.400" />
            </InputLeftElement>
            <Input
              rounded="24px"
              h="80px"
              placeholder="Họ và tên phụ huynh"
              bg="brandGray.100"
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
            <InputLeftElement pointerEvents="none" h="80px">
              <PhoneIcon color="brandGray.400" />
            </InputLeftElement>
            <Input
              rounded="24px"
              h="80px"
              placeholder="Số điện thoại"
              bg="brandGray.100"
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
            <InputLeftElement pointerEvents="none" h="80px">
              <Icon as={HiLocationMarker} color="brandGray.400" />
            </InputLeftElement>
            <Input
              rounded="24px"
              h="80px"
              placeholder="Địa chỉ"
              bg="brandGray.100"
              color="brandGray.500"
              {...register("location", { required: "Không được bỏ trống" })}
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.location && errors.location.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          onClick={onSubmit(handleSubmit)}
          isLoading={isLoading}
          w="100%"
          h="72px"
          bgColor="brandPurple.600"
          boxShadow="inset 0px -10px 0px rgba(29, 8, 56, 0.2)"
          color="white"
          rounded="40px"
          overflow={"hidden"}
          fontWeight="900"
          fontSize="24px"
          lineHeight="30px"
          letterSpacing="0.5px"
          _hover={{}}
        >
          Trải Ngiệm Ngay
        </Button>
      </VStack>
    </Stack>
  );
}
