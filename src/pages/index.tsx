import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/home",
      permanent: true,
    },
  };
};

const Index: NextPage = () => null;

export default Index;
