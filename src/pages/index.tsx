import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/home",
      permanent: true,
    },
  };
};

const Index: NextPage = () => null;

export default Index;
