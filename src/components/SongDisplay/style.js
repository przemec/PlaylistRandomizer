import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledContainer = styled(Grid)`
  margin: 5px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  cursor: default;
  & > * {
    z-index: 5;
  }
  &.isplaying {
    background: ${({ theme }) => theme.primary};
  }
  &.isplaying > * {
    color: ${({ theme }) => theme.colorText};
    font-style: italic;
  }
`;

export const StyledLp = styled(Grid)`
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  width: ${({ lpwidth }) => `${lpwidth * 10}px`};
  min-width: 28px;
  padding: 0 1vmin;
  color: ${({ theme }) => theme.defaultText};
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    font-size: 15px;
  }
`;

export const StyledTime = styled(StyledLp)`
  width: unset;
  min-width: 70px;
  padding: 0 1vmin 0 0;
`;

export const StyledTitle = styled.a`
  text-decoration: none;
  font-size: 17px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 20vmin - ${({ lpwidth }) => `${lpwidth * 10}px`} - 70px);
  color: ${({ theme }) => theme.defaultText};
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
