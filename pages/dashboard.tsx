import Layout from "@/components/common/layout";
import Jobs from "@/components/dashboard/jobs";
import Statistics from "@/components/dashboard/statistics";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Box flex="1">
        <Head>
          <title>JOBS | Dashboard</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Statistics />
        <Jobs />
      </Box>
    </Layout>
  );
};

export default Dashboard;
