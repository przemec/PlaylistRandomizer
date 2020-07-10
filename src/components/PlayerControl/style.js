import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const Container = styled(Grid)`
  width: 100%;
  height: 10vmin;
  max-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.backgroundAccent};
`;

export const ToolsCont = styled(Grid)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled(Grid)`
  width: 8vmin;
  height: 8vmin;
  max-width: 50px;
  max-height: 50px;
  margin: 0 5px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 2vmin;
  opacity: ${({ isdisabled }) => (!isdisabled ? 1 : 0.5)};
  & svg {
    fill: ${({ theme }) => theme.primary};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.primaryHover};
  }
`;
