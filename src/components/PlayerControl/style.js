import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const Container = styled(Grid)`
  width: 100%;
  height: 10vmin;
  max-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background: ${({ theme }) => theme.backgroundAccent};
`;

export const IconWrapper = styled(Grid)`
  width: 8vmin;
  height: 8vmin;
  max-width: 50px;
  max-height: 50px;
  margin: 0 10px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 2vmin;
  & svg {
    fill: ${({ theme }) => theme.primary};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.primaryHover};
  }
`;
