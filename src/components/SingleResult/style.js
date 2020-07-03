import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core/";

const fade = keyframes`
  from {
    opacity: 0
  }
  50% {
    opacity: 1
  }  
  to {
    opacity: 0
  }
`;

export const StyledContainer = styled(Grid)`
  position: relative;
  margin: 5px 0;
  background: ${({ isplaying, theme }) => isplaying && theme.primary};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 3;
  & > * {
    z-index: 5;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 4;
    background-image: ${({ isplaying, theme }) => isplaying && "linear-gradient(0deg," + theme.playingFade + ", " + theme.primary + ")"};
    animation: ${fade} 5s linear infinite;
  }
`;

export const StyledLp = styled(Grid)`
  font-size: 2vmin;
  text-align: center;
  width: 4vmin;
  padding: 0 1vmin;
  color: ${({ isplaying, theme }) => (isplaying ? theme.colorText : theme.defaultText)};
`;

export const StyledTitle = styled.a`
  text-decoration: none;
  font-size: 1.8vmin;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 21vmin);
  color: ${({ isplaying, theme }) => (isplaying ? theme.colorText : theme.defaultText)};
`;

export const Thumbnail = styled(Grid)`
  background: ${({ thumb }) => `url(${thumb})`};
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  max-height: 90px;
  max-width: 160px;
`;
