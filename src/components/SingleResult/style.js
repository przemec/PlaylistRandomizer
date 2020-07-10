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
  font-size: 18px;
  text-align: center;
  width: 4vmin;
  min-width: 28px;
  padding: 0 1vmin;
  color: ${({ isplaying, theme }) => (isplaying ? theme.colorText : theme.defaultText)};
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    font-size: 15px;
  }
`;

export const StyledTitle = styled.a`
  text-decoration: none;
  font-size: 17px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 21vmin);
  color: ${({ isplaying, theme }) => (isplaying ? theme.colorText : theme.defaultText)};
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    font-size: 15px;
  }
`;

export const Thumbnail = styled.img`
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  min-height: 45px;
  min-width: 80px;
  max-height: 90px;
  max-width: 160px;
`;
