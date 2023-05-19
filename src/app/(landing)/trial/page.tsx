"use client";
import { Box, Center } from "@chakra-ui/react";
import FeedbackForm from "./components/Form";

export default function TrialPage() {
  return (
    <Center h="100%" w="100%">
      <Box w="400px">
        <FeedbackForm />
      </Box>
    </Center>
  );
}
