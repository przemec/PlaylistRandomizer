import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const MainCont = styled(Grid)`
  height: calc(100vh - 40px);
  width: 100%;
  display: flex;
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    display: table;
  }
`;

export const Title = styled(Grid)`
  box-sizing: border-box;
  font-size: 18px;
  margin: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.defaultText};
`;

export const TitleNext = styled(Title)`
  font-size: 16px;
  margin-top: 0;
`;

export const PlayerContainer = styled(Grid)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 60%;
  & > * {
    max-width: 100vw;
    width: 80%;
  }
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    display: table-row;
    height: auto;
    width: 100%;
    & > * {
      width: 100%;
    }
    & ${Title} {
      padding: 0 10px;
    }
  }
`;

export const ResultsGroupWrapper = styled(Grid)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ResultsContainer = styled(Grid)`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  max-width: 800px;
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    display: table-row;
    max-width: unset;
    width: 100%;
  }
  &:hover .listControl {
    opacity: 1;
  }
`;

export const PlayerWrapper = styled(Grid)`
  position: relative;
  padding-bottom: 45%;
  height: 0;
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    padding-bottom: 56.25%;
  }
`;

export const Player = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
`;
