import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledList = styled(Grid)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  background: ${({ theme }) => theme.backgroundAccent};
  border-radius: ${({ displaytype }) => displaytype === "details" && "8px"};
`;
