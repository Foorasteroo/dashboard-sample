import { FC } from "react";
import styled from "@emotion/styled";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import useDarkMode from "@/hooks/useDarkMode";

const Sidebar = styled.div`
  background-color: #e2eae8;
`;

const MainContainer = styled.div`
  background-color: white;
`;

export const Dashboard: FC = ({ children }) => {
  useDarkMode();

  return (
    <div className="container mx-auto font-sans">
      <div className="flex flex-col sm:flex-row">
        <Sidebar className="sm:w-1/4 sm:rounded-l-md">
          <Navbar />
        </Sidebar>
        <MainContainer className="sm:w-3/4 p-8 sm:rounded-r-md text-slate-800 dark:bg-gray-700 dark:text-slate-100">
          <Header />
          <main>{children}</main>
        </MainContainer>
      </div>
    </div>
  );
};

export default Dashboard;
