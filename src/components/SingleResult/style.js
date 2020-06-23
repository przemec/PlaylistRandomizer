import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledContainer = styled(Grid)`
  margin: 5px 0;
  background: ${({ isplaying, theme }) => isplaying && theme.primary};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledLp = styled(Grid)`
  font-size: 2vmin;
  text-align: center;
  width: 4vmin;
  padding: 0 1vmin;
  color: ${({ isplaying, theme }) => (isplaying ? theme.colorText : theme.defaultText)};
`;

export const StyledTitle = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.8vmin;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 21vmin);
  color: ${({ isplaying, theme }) => (isplaying ? theme.colorText : theme.defaultText)};
`;

export const Thumbnail = styled(Grid)`
  background: ${({ thumb }) => `url(${thumb})`};
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  max-height: 90px;
  max-width: 160px;
`;
export const blue = {
  primary: "#303f9f",
  primaryHover: "#283593",
  secondary: "#4259f0",
  secondaryHover: "#283593",
  appBarBackground: "#303f9f",
  type: "light",
};

export const steelBlue = {
  primary: "#2980B9",
  primaryHover: "#1b7bba",
  secondary: "#2980B9",
  secondaryHover: "#1b7bba",
  appBarBackground: "#2980B9",
  type: "light",
};

export const cyan = {
  primary: "#27d1a7",
  primaryHover: "#24ba95",
  secondary: "#27d1a7",
  secondaryHover: "#24ba95",
  appBarBackground: "#27d1a7",
  type: "light",
};

export const green = {
  primary: "#00ac41",
  primaryHover: "#019439",
  secondary: "#00ac41",
  secondaryHover: "#019439",
  appBarBackground: "#00ac41",
  type: "light",
};

export const olive = {
  primary: "#a1b435",
  primaryHover: "#73a12a",
  secondary: "#a1b435",
  secondaryHover: "#73a12a",
  appBarBackground: "#a1b435",
  type: "light",
};

export const orange = {
  primary: "#FF8F00",
  primaryHover: "#ff7800",
  secondary: "#FF8F00",
  secondaryHover: "#ff7800",
  appBarBackground: "#FF8F00",
  type: "light",
};

export const salmon = {
  primary: "#FF5252",
  primaryHover: "#fd3c3c",
  secondary: "#FF5252",
  secondaryHover: "#fd3c3c",
  appBarBackground: "#FF5252",
  type: "light",
};

export const brick = {
  primary: "#C0392B",
  primaryHover: "#bf2a1b",
  secondary: "#C0392B",
  secondaryHover: "#bf2a1b",
  appBarBackground: "#C0392B",
  type: "light",
};

export const pink = {
  primary: "#d53c81",
  primaryHover: "#c63074",
  secondary: "#d53c81",
  secondaryHover: "#c63074",
  appBarBackground: "#d53c81",
  type: "light",
};

export const purple = {
  primary: "#9B59B6",
  primaryHover: "#9548b5",
  secondary: "#9B59B6",
  secondaryHover: "#9548b5",
  appBarBackground: "#9B59B6",
  type: "light",
};

export const intensivePurple = {
  primary: "#542ed3",
  primaryHover: "#4420be",
  secondary: "#542ed3",
  secondaryHover: "#4420be",
  appBarBackground: "#542ed3",
  type: "light",
};

export const grey = {
  primary: "#37474F",
  primaryHover: "#2a3940",
  secondary: "#37474F",
  secondaryHover: "#2a3940",
  appBarBackground: "#37474F",
  type: "light",
};
