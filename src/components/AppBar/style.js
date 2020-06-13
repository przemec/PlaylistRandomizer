import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const StyledAppBar = styled(Grid)`
  position: sticky;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 10;
`;
