import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const PlayerContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 60%;
  @media (max-width: 960px) {
    width: 100%;
    height: 52%;
  }
  @media (max-width: 800px) {
    height: 50%;
  }
  @media (max-width: 600px) {
    height: 40%;
  }
  & > * {
    width: 80%;
  }
`;

export const ResultsContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  max-width: 800px;
  @media (max-width: 960px) {
    max-width: unset;
    width: 100%;
    height: 48%;
  }
  @media (max-width: 800px) {
    height: 50%;
  }
  @media (max-width: 600px) {
    height: 60%;
  }
`;

export const PlayerWrapper = styled(Grid)`
  position: relative;
  padding-bottom: min(45%, 450px);
  height: 0;
  max-width: 800px;
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
  max-width: 800px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
