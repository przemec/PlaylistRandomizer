import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const MainContainerMobile = styled(Grid)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled(MainContainerMobile)`
  height: calc(100vh - 40px);
  flex-direction: row;
`;

export const ContentWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
