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
  font-size: 2vmin;
  text-align: center;
  width: ${({ lp }) => `calc(${lp * 11}px + 4px)`};
`;

export const StyledTitle = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.8vmin;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - ${({ lp }) => `${lp * 11}px - 16vmin - 4px`});
`;

export const Thumbnail = styled(Grid)`
  background: ${({ thumb }) => `url(${thumb})`};
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  max-height: 90px;
  max-width: 160px;
`;
