import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledList = styled(Grid)`
  width: 100vw;
  max-width: 800px;
  height: 60vh;
  overflow-y: scroll;
  background: rgba(0, 0, 55, 0.1);
`;

export const Styled100 = styled(StyledList)`
  height: 100vh;
`;
