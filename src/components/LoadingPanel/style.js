import styled from "styled-components";
import { keyframes } from "styled-components";
import { Grid } from "@material-ui/core/";
import LoopIcon from "@material-ui/icons/Autorenew";

export const Container = styled(Grid)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled(Grid)`
  width: 250px;
  height: 100px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 55, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
