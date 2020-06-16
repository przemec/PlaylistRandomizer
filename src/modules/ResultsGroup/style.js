import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledList = styled(Grid)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${({ theme }) => theme.backgroundAccent};
  & > *:last-child {
    margin-bottom: 60px;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar {
    width: 12px;
    background-color: ${({ theme }) => theme.backgroundAccent};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
  }
`;
