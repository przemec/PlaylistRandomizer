import styled from "styled-components";
import { Paper, Grid } from "@material-ui/core/";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export const StyledPaper = styled(Paper)`
  width: 40vw;
  height: 25vh;
  min-width: 320px;
  max-height: 200px;
  background: rgba(0, 0, 55, 0.1);
`;

export const FullHeight = styled(Grid)`
  height: 100%;
`;

export const TextFieldCont = styled(Grid)`
  width: 80%;
  height: 60px;
`;
export const SearchCont = styled(Grid)`
  width: 10%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const StyledArrow = styled(ArrowForwardIcon)`
  &.MuiSvgIcon-root {
    height: 50px;
    width: 40px;
  }
`;
