import Heading from "@/components/index/Heading";
import LoginForm from "@/components/index/login-form";
import SignUpForm from "@/components/index/sign-up-form";
import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleLogin = (isLogin: boolean) => {
    setIsLogin(isLogin);
  };

  return (
    <Flex alignItems="center" h="100vh" justifyContent="center" w="100vw">
      <Head>
        <title>{`JOBS | ${isLogin ? "Login" : "Sign Up"}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Flex
        backgroundImage="linear-gradient(to bottom right, rgba(255,255,255,.10), rgba(255,255,255,.05));"
        borderRadius="30px"
        boxShadow="0 10px 4px rgba(0,0,0,0.2);"
        flexDir="column"
        p="60px 40px"
      >
        <Heading />
        {isLogin && <LoginForm onToggleLogin={handleToggleLogin} />}
        {!isLogin && <SignUpForm onToggleLogin={handleToggleLogin} />}
      </Flex>
    </Flex>
  );
};

export default Home;
