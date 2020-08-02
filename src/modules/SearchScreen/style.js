import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const MainContainerMobile = styled(Grid)`
  width: 100%;
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled(MainContainerMobile)`
  flex-direction: ${({ isshowcaseshort }) => (isshowcaseshort ? "column" : "row")};
`;

export const ContentWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isshowcaseshort }) => (isshowcaseshort ? "100vw" : "unset")};
  max-width: ${({ isshowcaseshort }) => (isshowcaseshort ? "777px" : "unset")};
  flex: ${({ isshowcaseshort }) => (isshowcaseshort ? 0 : 1)};
`;
