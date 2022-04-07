import styled from "@emotion/styled";

type StatusLedProps = {
  active: boolean;
};

export const StatusLed = styled.span<StatusLedProps>`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "green" : "red")};
`;
