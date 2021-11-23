import styled, { css } from "styled-components";
import { Grid } from "@material-ui/core/";

export const IconWrapper = styled(Grid)`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  visibility: ${({ isfav }) => (isfav ? "visible !important" : "hidden")};
  opacity: ${({ isfav }) => (isfav ? "1 !important" : 0.5)};
  &:not(:first-child) {
    margin-left: 5px;
  }
  & svg {
    width: 8vmin;
    height: 8vmin;
    max-width: 30px;
    max-height: 30px;
    fill: ${({ theme, isfav }) => (isfav ? theme.primary : theme.defaultText)};
  }
  &:hover {
    opacity: 1 !important;
  }
  &:hover svg {
    fill: ${({ theme, isfav }) => (isfav ? theme.primaryHover : theme.defaultText)};
  }
`;

export const IconsContainer = styled(Grid)`
  width: ${({ isresumable }) => (isresumable ? "135px" : "100px")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ isresumable }) =>
    isresumable
      ? css`
          & ${IconWrapper} {
            opacity: 0;
          }
          & ${IconWrapper}:nth-child(1) {
            transform: scale(0.5) translateX(80px);
          }
          & ${IconWrapper}:nth-child(2) {
            transform: scale(0.5) translateX(40px);
          }
          & ${IconWrapper}:nth-child(4) {
            transform: scale(0.5) translateX(-40px);
          }
        `
      : css`
          & ${IconWrapper} {
            opacity: 0;
          }
          & ${IconWrapper}:nth-child(3) {
            transform: scale(0.5) translateX(-40px);
          }
        `}
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    & ${IconWrapper} {
      visibility: visible;
      opacity: 0.5;
      transform: none !important;
    }
  }
`;

export const MainContainer = styled(Grid)`
  height: 9vmin;
  min-height: 60px;
  max-height: 90px;
  position: relative;
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  z-index: 3;
  cursor: pointer;
  transform: scale(0.97);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1);
    box-shadow: 0px -3px 4px -1px ${({ theme }) => (theme.type === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)")},
      0px 3px 4px -1px ${({ theme }) => (theme.type === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)")};
  }
  ${({ isresumable }) =>
    isresumable
      ? css`
          &:hover ${IconWrapper} {
            visibility: visible;
            opacity: 0.5;
            transform: scale(1) translateX(0px);
          }
          &:hover ${IconWrapper}:nth-child(3) {
            transform: rotate(360deg);
          }
        `
      : css`
          &:hover ${IconWrapper} {
            visibility: visible;
            opacity: 0.5;
            transform: scale(1) translateX(0px);
          }
          &:hover ${IconWrapper}:nth-child(2) {
            transform: rotate(360deg);
          }
        `}
`;

export const Cont = styled(Grid)`
  width: calc(100% - ${({ isresumable }) => (isresumable ? "135px" : "100px")});
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Thumbnail = styled.img`
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  min-height: 60px;
  min-width: 105px;
  max-height: 90px;
  max-width: 160px;
  color: ${({ theme }) => theme.defaultText};
`;

export const StyledTitle = styled.a`
  text-decoration: none;
  font-size: 19px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.defaultText};
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    font-size: 17px;
    margin-bottom: 0px;
  }
`;

export const DataContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: calc(100% - 160px);
  @media (max-width: 650px) and (max-height: 899px) {
    max-width: calc(100% - 110px);
  }
`;

export const StyledData = styled.div`
  text-decoration: none;
  font-size: 15px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  color: ${({ theme }) => theme.defaultText};
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    font-size: 14px;
  }
`;
