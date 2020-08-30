import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const StyledContainer = styled(Grid)`
  padding: 3%;
`;

export const StyledField = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vh;
  height: 8vh;
  margin: 1vh;
  border-radius: ${({ ischecked }) => (ischecked ? "4vh" : "2vh")};
  border-width: 0.5vh;
  border-style: solid;
  border-color: ${({ border }) => border};
  background: ${({ color }) => color};
  transition: 0.2s all ease-in-out;
  line-height: 7.2vh;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
  & svg {
    transition: 0.2s all ease-in-out;
    fill: ${({ border }) => border};
    height: 5vh;
    width: 5vh;
  }
  &:hover {
    opacity: 1;
    border-radius: 4vh;
    transform: rotate(90deg);
    & svg {
      transform: rotate(-90deg);
    }
  }
`;
