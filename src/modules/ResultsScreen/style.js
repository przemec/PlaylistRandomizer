import styled from "styled-components";
import { Grid } from "@material-ui/core/";

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
  width: 45%;
  max-width: 800px;
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (min-height: 451px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    display: table-row;
    max-width: unset;
    width: 100%;
  }
`;
