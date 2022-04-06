import { FC } from "react";
import styled from "@emotion/styled";
import Navbar from "@/components/navbar";

const Sidebar = styled.div`
  background-color: #e2eae8;
`;

const MainContainer = styled.div`
  background-color: white;
`;

export const Dashboard: FC = ({ children }) => {
  return (
    <div className="container mx-auto my-4 shadow-lg">
      <div className="flex flex-cols-2 ">
        <Sidebar className="w-1/4 rounded-l-md">
          <Navbar />
        </Sidebar>
        <MainContainer className="w-3/4 p-8 rounded-r-md">
          <main>{children}</main>
        </MainContainer>
      </div>
    </div>
  );
};

export default Dashboard;
