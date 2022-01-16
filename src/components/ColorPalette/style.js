import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const StyledContainer = styled(Grid)`
  padding: 3% 0;
`;

export const StyledField = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vh;
  height: 8vh;
  min-width: 45px;
  min-height: 45px;
  margin: 1vh;
  border-radius: ${({ ischecked }) => (ischecked ? "30px" : "15px")};
  border-width: 3px;
  border-style: solid;
  border-color: ${({ border }) => border};
  background: ${({ color }) => color};
  transition: 0.2s all ease-in-out;
  line-height: 7.2vh;
  text-align: center;
  cursor: pointer;
  opacity: ${({ ischecked }) => (ischecked ? "1" : "0.8")};
  & svg {
    transition: 0.2s all ease-in-out;
    fill: ${({ border }) => border};
    height: 5vh;
    width: 5vh;
    min-width: 30px;
    min-height: 30px;
  }
  &:hover {
    opacity: 1;
    border-radius: 30px;
  }
`;
