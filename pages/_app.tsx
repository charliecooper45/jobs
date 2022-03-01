import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import "@fontsource/work-sans";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { route } = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS>
        <ScaleFade key={route} initialScale={0.9} in>
          <Component {...pageProps} />
        </ScaleFade>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
