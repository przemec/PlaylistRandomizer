import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const ThemesWrapper = styled(Grid)`
  overflow-y: scroll;
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.backgroundAccent};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
  }
`;
