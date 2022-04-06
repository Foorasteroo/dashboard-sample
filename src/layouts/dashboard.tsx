import styled from "@emotion/styled";
import { FC } from "react";

const Container = styled.div`
  background: lightgray;
`;

export const Dashboard: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Dashboard;
