import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const ListControl = styled(Grid)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 8vh;
  max-height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(0deg, #00000088, transparent 90%);
  transition: all 0.2s ease-in-out;
  opacity: 0;
  z-index: 7;
`;

export const ListControlMob = styled(ListControl)`
  opacity: 1;
`;

export const ArrowWrapper = styled(Grid)`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, ${({ theme }) => theme.background}, transparent 90%);
  transition: all 0.2s ease-in-out;
  opacity: 0.5;
  &:hover {
    opacity: ${({ isactive }) => (isactive ? 1 : 0.5)};
    cursor: ${({ isactive }) => (isactive ? "pointer" : "auto")};
  }
  & > * {
    opacity: ${({ isactive }) => (isactive ? 1 : 0)};
  }
  & svg {
    fill: ${({ theme }) => theme.primary};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.primaryHover};
  }
`;
