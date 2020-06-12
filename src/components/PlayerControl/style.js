import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const Container = styled(Grid)`
  width: 100%;
  height: 7vh;
  min-height: 60px;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background: #00008822;
  max-width: 800px;
`;

export const IconWrapper = styled(Grid)`
  width: 7vh;
  height: 70%;
  min-width: 40px;
  max-width: 50px;
  margin: 0 10px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #00008822;
`;
