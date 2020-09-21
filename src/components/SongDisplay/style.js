import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledContainer = styled(Grid)`
  margin: 5px 0;
  background: ${({ isplaying, theme }) => isplaying && theme.primary};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  cursor: default;
  & > * {
    z-index: 5;
  }
`;

export const StyledLp = styled(Grid)`
  font-size: 18px;
  text-align: center;
  width: 4vmin;
  min-width: 28px;
  padding: 0 1vmin;
  font-style: ${({ isplaying }) => isplaying && "italic"};
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
  font-style: ${({ isplaying }) => isplaying && "italic"};
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
