import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const PlayerContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 60%;
  & > * {
    width: 80%;
  }
  /*pc*/
  @media (max-width: 900px) and (min-height: 900px) {
    width: 100%;
    height: 65%;
  }
  @media (max-width: 800px) and (min-height: 900px) {
    height: 58%;
  }
  @media (max-width: 700px) and (min-height: 900px) {
    height: 53%;
  }
  @media (max-width: 600px) and (min-height: 900px) {
    height: 48%;
  }
  /*lapk*/
  @media (max-width: 700px) and (max-height: 899px) {
    width: 100%;
    height: 70%;
  }
  @media (max-width: 600px) and (max-height: 899px) {
    height: 60%;
  }
  @media (max-width: 500px) and (max-height: 740px) {
    height: 60%;
  }
  /*mob*/
  @media (max-width: 500px) and (max-height: 899px) and (min-height: 741px) {
    height: 50%;
  }
  @media (max-width: 420px) and (max-height: 899px) {
    height: 44%;
  }
  @media (max-width: 450px) and (max-height: 650px) {
    height: 50%;
  }
  /*small mob horizontal*/
  @media (max-width: 700px) and (max-height: 500px) {
    width: 50%;
    height: 100%;
  }
  /*mob desktop mode*/
  @media (max-width: 1000px) and (min-height: 1200px) {
    height: 35%;
    width: 100%;
  }
`;

export const ResultsContainer = styled(Grid)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  max-width: 800px;
  /*pc*/
  @media (max-width: 900px) and (min-height: 900px) {
    max-width: unset;
    width: 100%;
    height: 35%;
  }
  @media (max-width: 800px) and (min-height: 900px) {
    height: 42%;
  }
  @media (max-width: 700px) and (min-height: 900px) {
    height: 47%;
  }
  @media (max-width: 600px) and (min-height: 900px) {
    height: 52%;
  }
  /*lapk*/
  @media (max-width: 700px) and (max-height: 899px) {
    width: 100%;
    height: 30%;
  }
  @media (max-width: 600px) and (max-height: 899px) {
    height: 40%;
  }
  @media (max-width: 501px) and (max-height: 741px) {
    height: 40%;
  }
  /*mob*/
  @media (max-width: 500px) and (max-height: 899px) and (min-height: 740px) {
    height: 50%;
  }
  @media (max-width: 420px) and (max-height: 899px) {
    height: 56%;
  }
  @media (max-width: 450px) and (max-height: 650px) {
    height: 50%;
  }
  /*small mob horizontal*/
  @media (max-width: 700px) and (max-height: 500px) {
    width: 50%;
    height: 100%;
  }
  /*mob desktop mode*/
  @media (max-width: 1000px) and (min-height: 1200px) {
    height: 65%;
    width: 100%;
    max-width: unset;
  }
  &:hover .listControl {
    opacity: 1;
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
  color: ${({ theme }) => theme.defaultText};
`;

export const TitleNext = styled(Title)`
  font-size: 1.8vh;
  margin-top: 0;
`;
