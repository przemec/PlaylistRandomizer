import styled from "styled-components";
import { Grid, Container } from "@material-ui/core/";

export const Cont = styled(Container)`
  max-width: 600px;
`;

export const ThemeTypeCont = styled(Grid)`
  padding-top: 3%;
  width: 100%;
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
  border-color: ${({ theme }) => theme.defaultText};
  transition: 0.2s all ease-in-out;
  line-height: 7.2vh;
  text-align: center;
  cursor: pointer;
  opacity: ${({ isactive }) => (isactive ? 1 : 0.8)};
  & svg {
    fill: ${({ theme, isactive }) => (isactive ? theme.primary : theme.defaultText)};
    height: 5vh;
    width: 5vh;
  }
  &:hover {
    opacity: 1;
  }
`;
