import { Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDirection="column" height="100vh" maxW="1200px" m="auto">
      <Header />
      <Flex as="main" flex="1">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
