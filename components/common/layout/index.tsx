import { Flex } from "@chakra-ui/react";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Flex as="main" maxW="1200px" m="auto">
        {children}
      </Flex>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
