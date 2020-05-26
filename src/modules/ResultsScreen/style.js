import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const PlayerContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    width: 80%;
  }
`;

export const PlayerWrapper = styled(Grid)`
  position: relative;
  padding-bottom: 45%;
  height: 0;
`;

export const Player = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Title = styled(Grid)`
  font-size: 2vh;
  margin: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
