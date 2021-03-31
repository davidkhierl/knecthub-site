import { Box } from "@chakra-ui/layout";
import Container from "../components/container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Knecthub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH="100vh">test</Container>
    </>
  );
}
