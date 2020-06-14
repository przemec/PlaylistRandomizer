import styled from "styled-components";
import { keyframes } from "styled-components";
import { Grid } from "@material-ui/core/";
import LoopIcon from "@material-ui/icons/Autorenew";

export const PanelBackground = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPanel = styled(Grid)`
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

export const StyledPanelErr = styled(StyledPanel)`
  background: rgba(155, 0, 0, 0.1);
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
