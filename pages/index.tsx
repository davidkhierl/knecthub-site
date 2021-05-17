import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import Container from "../components/container";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Knecthub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="100vh" p={0}>
        <Box
          as="header"
          display="flex"
          mt={4}
          justifyContent="space-between"
          alignItems="center">
          <Link href="/">
            <a>
              <Image
                src="/knecthub-dark.svg"
                alt="logo"
                height="60px"
                width="auto"
              />
            </a>
          </Link>
          <Button
            as="a"
            variant="outline-yellow"
            size="lg"
            href="https://app.knecthub.com/signin"
            ml={8}>
            SIGN IN
          </Button>
        </Box>
        <Flex flex={1} alignItems="center">
          <Box width="100%" maxW={[730]} flexShrink={0} px={8}>
            <Heading color="white" size="3xl">
              Your one stop platform to connecting people and businesses
              worldwide.
            </Heading>
            <Text fontSize="md" color="white" mt={6}></Text>
            <Button
              as="a"
              variant="solid-yellow"
              size="lg"
              href="https://app.knecthub.com/signin"
              mt={8}>
              SIGN UP FOR FREE NOW
            </Button>
          </Box>
          <Box
            display={["none", "none", "none", "block"]}
            flex={1}
            alignSelf="stretch"
            className={styles.landingIcon}></Box>
        </Flex>
        <Box as="footer" pb={2}>
          <Text color="gray.100" textAlign="center">
            <a href="https://streamapp.io">Powered by Stream App</a>
          </Text>
        </Box>
      </Container>
    </>
  );
}

export { getServerSideProps } from "@/chakra-ui/chakra";
