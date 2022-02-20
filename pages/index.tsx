import LoginForm from "@/components/index/login-form";
import jobsLogo from "@/images/logo.svg";
import { Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Head>
        <title>JOBS | Login</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Flex
        backgroundImage="linear-gradient(to bottom right, rgba(255,255,255,.10), rgba(255,255,255,.05));"
        borderRadius="30px"
        boxShadow="0 10px 4px rgba(0,0,0,0.2);"
        flexDir="column"
        p="60px 40px"
      >
        <Image alt="Jobs Logo" height="50px" priority src={jobsLogo} />
        <Text fontSize="1.25rem" mt="40px" textAlign="center">
          Your one and only job search <br />
          organiser
        </Text>
        <LoginForm />
      </Flex>
    </Flex>
  );
};

export default Home;
