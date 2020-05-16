import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledContainer = styled(Grid)`
  margin: 5px 0;
  background: ${({ isplaying }) => isplaying && "lightblue"};
`;

export const StyledLp = styled(Grid)`
  line-height: 90px;
  text-align: center;
  width: ${({ lp }) => `${lp * 11}px`};
`;

export const StyledSong = styled(Grid)`
  width: calc(100% - ${({ lp }) => `${lp * 11}px`});
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledTitle = styled(Grid)`
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
