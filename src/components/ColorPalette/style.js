import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const StyledHeader = styled.div`
  color: ${({ theme }) => theme.primary};
  width: 100vw;
  height: auto;
  line-height: 3.5vh;
  font-size: 3.5vh;
  text-align: center;
`;

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
  border-radius: 2vh;
  border-width: 0.5vh;
  border-style: solid;
  border-color: ${({ border }) => border};
  background: ${({ color }) => color};
  transition: 0.2s all ease-in-out;
  line-height: 7.2vh;
  text-align: center;
  cursor: pointer;
  font-size: 3vh;
  opacity: 0.9;

  &::selection {
    background: transparent;
  }
  &:hover {
    opacity: 1;
  }
  & svg {
    fill: ${({ border }) => border};
    height: 5vh;
    width: 5vh;
  }
`;
