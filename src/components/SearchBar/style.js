import styled from "styled-components";
import { Grid, TextField } from "@material-ui/core/";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export const MainWrapper = styled(Grid)`
  width: 90%;
  height: 25vmin;
  min-width: 300px;
  min-height: 140px;
  max-width: ${({ ismobile }) => (ismobile ? "unset" : "700px")};
  max-height: 180px;
  margin-top: 15px;
  border-radius: 7px;
  padding: 5px;
  background: ${({ theme }) => theme.backgroundAccent};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const FullHeight = styled(Grid)`
  height: 100%;
`;

export const StyledTextField = styled(TextField)`
  & input {
    color: ${({ theme }) => theme.defaultText};
  }

  & [class*="MuiInput-underline"]:not(.Mui-disabled)::before {
    border-color: ${({ theme }) => theme.defaultText};
  }
  & label {
    color: ${({ theme }) => theme.defaultText};
    border-color: ${({ theme }) => theme.defaultText};
  }
  &:hover [class*="MuiInput-underline"]:not(.Mui-disabled)::before,
  & label[class*="Mui-focused"],
  &:hover label,
  & [class*="MuiInput-underline"]::after,
  & [class*="MuiInput-underline"][class*="Mui-focused"]::after {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    border-width: 2px;
  }
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
  & svg {
    fill: ${({ theme }) => theme.primary};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.primaryHover};
  }
`;

export const StyledArrow = styled(ArrowForwardIcon)`
  &.MuiSvgIcon-root {
    height: 50px;
    width: 40px;
  }
`;
