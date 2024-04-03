import { Wolf } from "@/components";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Wolf />
        <Wolf />
        <Wolf />
        <Wolf />
        <Wolf />
        <Wolf />
      </div>
    </ChakraProvider>
  );
}
