import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core/";
import LoopIcon from "@material-ui/icons/Autorenew";

export const ResultsGroupWrapper = styled(Grid)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ResultsContainer = styled(Grid)`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 45%;
  max-width: 800px;
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 700px) and (min-height: 451px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    display: table-row;
    max-width: unset;
    width: 100%;
  }
`;

export const IconWrapper = styled(Grid)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backgroundAccent};
  & svg {
    width: 5vmin;
    height: 5vmin;
    fill: ${({ theme }) => theme.primary};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoopIco = styled(LoopIcon)`
  animation: ${rotate} 2s linear infinite;
`;
