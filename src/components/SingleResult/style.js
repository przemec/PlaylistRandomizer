import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledContainer = styled(Grid)`
  margin: 5px 0;
  background: ${({ isplaying }) => isplaying && "lightblue"};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledLp = styled(Grid)`
  font-size: 2vh;
  text-align: center;
  width: ${({ lp }) => `${lp * 11}px`};
`;

export const StyledTitle = styled(Grid)`
  font-size: 1.8vh;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - ${({ lp }) => `${lp * 11}px - 16vh`});
`;

export const Thumbnail = styled(Grid)`
  background: ${({ thumb }) => `url(${thumb})`};
  width: 16vh;
  height: 9vh;
  background-size: cover;
  max-height: 90px;
  max-width: 160px;
`;
